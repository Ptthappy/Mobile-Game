import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
// import { exit } from 'cordova-plugin-exit';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navigator: NavigateService) { }

  // exit() {
  //   exit();
  // }

  ngOnInit() {
  }

}
