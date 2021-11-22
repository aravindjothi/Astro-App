import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { NewPageComponent } from './new-website/new-page/new-page.component';
import { NavbarRoutingModule } from './navbar/navbar-routing.module';
import { LandingComponent } from './landing/landing.component';
import {NavbarModule} from "./navbar/navbar.module";
import {SlideshowModule} from "./slideshow/slideshow.module";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NavbarModule,
    SlideshowModule,
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
