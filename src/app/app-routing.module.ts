import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Navbar1Component} from "./navbar1/navbar1.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {CourseInfoComponent} from "./course-info/course-info.component";
import {CourseGalleryComponent} from "./course-gallery/course-gallery.component";
import {Navbar2Component} from "./navbar2/navbar2.component";


const routes: Routes = [
  {path: '', redirectTo: 'slideshow', pathMatch: 'full'},
  {
    path: '', component: Navbar1Component, children: [
      {path: 'slideshow', component: SlideshowComponent},
      {path: 'course-info', component: CourseInfoComponent}
    ]
  },
  {
    path: '', component: Navbar2Component, children: [
      {path: 'course-gallery', component: CourseGalleryComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
