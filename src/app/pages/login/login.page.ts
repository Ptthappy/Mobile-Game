import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  pass: string = '';
  fetched: boolean = false;

  constructor(private navigator: NavigateService) { }

  login = async () => {
    if (this.user === '' || this.pass === '') {
      console.log("Please enter all the fields");  // TODO: Show error label
    } else if (!this.fetched) {
      const body = {
        username: this.user,
        password: this.pass
      };

      console.log(body);

      this.fetched = true;
      await fetch('http://localhost:8080/login', { body: JSON.stringify(body), method: 'POST', credentials: 'include' })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {   // TODO: use local storage to save user
              console.log('Te logiaste jaja');
              this.navigator.navigate('menu');
            } else {
              console.log('No te logiaste jaja'); // TODO: Show error label with incorrect user or password
            }
          }).catch(err => {
            console.log('Error trying to login. Check your Internet connectuion and try again'); // TODO: Move this to error label
            this.fetched = false;
          });
    }
  }

  ngOnInit() {
  }

}
