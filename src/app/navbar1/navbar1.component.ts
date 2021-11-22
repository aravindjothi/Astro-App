import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
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
        label:'About Us',
        icon:'pi pi-fw pi-info-circle',
        items:[
          {
            label:'About Pt. Gopal Sharma',
          },
          {
            label:'Awards & Honours',
          },
          {
            label:'Client List',
          },
          {
            label:'Services we offer',
          },
          {
            label:'Contact Us',
          },
          {
            label:'Books by Pt. Gopal Sharma',
          },
          {
            label:'Website Disclaimer',
          },
          {
            label:'Our Social Project',
          },
        ]
      },
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'New',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-user-minus',

          },
          {
            label:'Search',
            icon:'pi pi-fw pi-users',
            items:[
              {
                label:'Filter',
                icon:'pi pi-fw pi-filter',
                items:[
                  {
                    label:'Print',
                    icon:'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon:'pi pi-fw pi-bars',
                label:'List'
              }
            ]
          }
        ]
      },
      {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];
  }

}
