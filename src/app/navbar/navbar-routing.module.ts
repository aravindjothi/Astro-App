import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar.component";
import {NewPageComponent} from "../new-website/new-page/new-page.component";

const routes: Routes = [
  {path: 'my-test', component: NewPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
