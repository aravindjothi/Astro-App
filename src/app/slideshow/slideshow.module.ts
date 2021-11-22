import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideshowRoutingModule} from "./slideshow-routing.module";
import {SlideshowComponent} from "./slideshow.component";



@NgModule({
  declarations: [SlideshowComponent

      ],
  exports: [
    SlideshowRoutingModule,
    SlideshowComponent,


  ],
  imports: [
    CommonModule,
    SlideshowRoutingModule
  ]

})
export class SlideshowModule { }
