import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelAstroComponent } from './wel-astro/wel-astro.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ContactSecComponent } from './contact-sec/contact-sec.component';
import { CourseGalleryComponent } from './course-gallery/course-gallery.component';
import { ServicesOfferComponent } from './services-offer/services-offer.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { FooterSecComponent } from './footer-sec/footer-sec.component';
import { LandingComponent } from './landing/landing.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Navbar1Component} from "./navbar1/navbar1.component";
import { Navbar2Component } from './navbar2/navbar2.component';


@NgModule({
  declarations: [
    AppComponent,
    WelAstroComponent,
    CourseInfoComponent,
    ContactSecComponent,
    CourseGalleryComponent,
    ServicesOfferComponent,
    VideoGalleryComponent,
    FooterSecComponent,
    LandingComponent,
    SlideshowComponent,
    Navbar1Component,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
    ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
