import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {NavbarRoutingModule} from "./navbar-routing.module";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {NewPageComponent} from "../new-website/new-page/new-page.component";



@NgModule({
  declarations: [NavbarComponent,NewPageComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule


  ],
  exports: [NavbarRoutingModule, NavbarComponent, NewPageComponent ]
})
export class NavbarModule { }
