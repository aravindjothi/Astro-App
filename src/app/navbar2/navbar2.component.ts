import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  openLink() {
    window.open("/my-test");
  }
  items: MenuItem[] | any;
  constructor() {
  }


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];
  }

}
