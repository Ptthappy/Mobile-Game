import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: string = '';
  email: string = '';
  pass: string = '';
  pass2: string = '';
  fetched: boolean = false;

  constructor(private navigator: NavigateService) { }

  register = async () => {
    if (this.user === '' || this.email === '' || this.pass === '' || this.pass2 === '') {
      console.log("Please enter all the fields");
    } else if (this.pass !== this.pass2) {
      console.log('Passwords doesn\'t match');
    } else if (!this.fetched) {
      const body = {
        username: this.user,
        email: this.email,
        password: this.pass
      };

      this.fetched = true;

      await fetch('http://localhost:8080/register', { method: 'POST', body: JSON.stringify(body), credentials: 'include' })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              console.log('te rejistratez mirrei jajjaajaj');
            } else {
              console.log('no te rejistrastez plastemierda');
            }
          }).catch(err => {
            console.log('mamawebo si no hay server como sebillo te vai a rejistra XD');
          });
      this.fetched = false;
    }
  }

  ngOnInit() {
  }

}
