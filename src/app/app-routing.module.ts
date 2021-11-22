import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {NewPageComponent} from "./new-website/new-page/new-page.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {CourseInfoComponent} from "./course-info/course-info.component";
import {CourseGalleryComponent} from "./course-gallery/course-gallery.component";


const routes: Routes = [
  { path: '', redirectTo: 'slideshow', pathMatch: 'full'},
  { path: '', component: NavbarComponent, children: [
      {path: 'slideshow', component: SlideshowComponent},
      {path: 'course-info', component: CourseInfoComponent}
  ]},
  { path: 'course-gallery', component: CourseGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
