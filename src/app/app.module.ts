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
import { NewPageComponent} from "./new-website/web-disclaimer/new-page.component";
import { LandingComponent } from './landing/landing.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {Navbar1Component} from "./navbar1/navbar1.component";
import { Navbar2Component } from './navbar2/navbar2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConsServiceComponent } from './cons-service/cons-service.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AwardsHonoursComponent } from './awards-honours/awards-honours.component';
import { ClientListComponent } from './client-list/client-list.component';
import { VaastuBooksComponent } from './vaastu-books/vaastu-books.component';
import { ResidentialVaastuComponent } from './residential-vaastu/residential-vaastu.component';
import { CommercialVaastuComponent } from './commercial-vaastu/commercial-vaastu.component';
import { PalmistryServiceComponent } from './palmistry-service/palmistry-service.component';
import { NumerologyServiceComponent } from './numerology-service/numerology-service.component';
import { InstituteIvjlComponent } from './new-website/institute-ivjl/institute-ivjl.component';
import { FacultyServiceComponent } from './new-website/faculty-service/faculty-service.component';
import { AdmissionCurriculumComponent } from './new-website/admission-curriculum/admission-curriculum.component';
import { SpecialCoursesComponent } from './new-website/special-courses/special-courses.component';
import { DistanceLearningComponent } from './new-website/distance-learning/distance-learning.component';
import { KundaliMatrimonyComponent } from './new-website/kundali-matrimony/kundali-matrimony.component';
import { PrivacyPolicyComponent } from './new-website/privacy-policy/privacy-policy.component';
import { VaastuArticlesComponent } from './new-website/vaastu-articles/vaastu-articles.component';
import { AstrologyArticlesComponent } from './new-website/astrology-articles/astrology-articles.component';
import { NumerologyArticlesComponent } from './new-website/numerology-articles/numerology-articles.component';
import { FengshuiArticlesComponent } from './new-website/fengshui-articles/fengshui-articles.component';
import { GemstoneArticlesComponent } from './new-website/gemstone-articles/gemstone-articles.component';
import { PyravaastuArticlesComponent } from './new-website/pyravaastu-articles/pyravaastu-articles.component';
import { KuaNumberComponent } from './new-website/kua-number/kua-number.component';
import { ShopofficeNumberComponent } from './new-website/shopoffice-number/shopoffice-number.component';
import { ExistingPlotComponent } from './new-website/existing-plot/existing-plot.component';
import { HindiBooksComponent } from './new-website/hindi-books/hindi-books.component';
import { EnglishBooksComponent } from './new-website/english-books/english-books.component';
import { PhotoGalleryComponent } from './new-website/photo-gallery/photo-gallery.component';
import { EducationalVaastuComponent } from './new-website/vaastu-for-business/educational-vaastu/educational-vaastu.component';
import { FactoriesVaastuComponent } from './new-website/vaastu-for-business/factories-vaastu/factories-vaastu.component';
import { HospitalsVaastuComponent } from './new-website/vaastu-for-business/hospitals-vaastu/hospitals-vaastu.component';
import { ShopsVaastuComponent } from './new-website/vaastu-for-business/shops-vaastu/shops-vaastu.component';
import { BanksVaastuComponent } from './new-website/vaastu-for-business/banks-vaastu/banks-vaastu.component';
import { DrawingroomVaastuComponent } from './new-website/vaastu-for-residence/drawingroom-vaastu/drawingroom-vaastu.component';
import { KitchensVaastuComponent } from './new-website/vaastu-for-residence/kitchens-vaastu/kitchens-vaastu.component';
import { MasterbedroomVaastuComponent } from './new-website/vaastu-for-residence/masterbedroom-vaastu/masterbedroom-vaastu.component';
import { KidsbedroomVaastuComponent } from './new-website/vaastu-for-residence/kidsbedroom-vaastu/kidsbedroom-vaastu.component';
import { WatersourceVaastuComponent } from './new-website/vaastu-for-residence/watersource-vaastu/watersource-vaastu.component';
import { FengshuiHealthComponent } from './new-website/fengshui-you/fengshui-health/fengshui-health.component';
import { FengshuiWealthComponent } from './new-website/fengshui-you/fengshui-wealth/fengshui-wealth.component';
import { FengshuiEducationComponent } from './new-website/fengshui-you/fengshui-education/fengshui-education.component';
import { FengshuiHarmonyComponent } from './new-website/fengshui-you/fengshui-harmony/fengshui-harmony.component';
import { FengshuiOfficeComponent } from './new-website/fengshui-you/fengshui-office/fengshui-office.component';
import { VaastuCareerComponent } from './new-website/dailylife-vaastu/vaastu-career/vaastu-career.component';
import { MarriageVaastuComponent } from './new-website/dailylife-vaastu/marriage-vaastu/marriage-vaastu.component';
import { EducationVaastuComponent } from './new-website/dailylife-vaastu/education-vaastu/education-vaastu.component';
import { BusinessVaastuComponent } from './new-website/dailylife-vaastu/business-vaastu/business-vaastu.component';
import { VaastuWealthComponent } from './new-website/dailylife-vaastu/vaastu-wealth/vaastu-wealth.component';
import { BlogComponent } from './blog/blog.component';
import { ConsultationServicesComponent } from './new-website/consultation-services/consultation-services.component';
import { ArticlesComponent } from './new-website/articles/articles.component';
import { OnlineServicesComponent } from './new-website/online-services/online-services.component';
import { ProductsComponent } from './new-website/products/products.component';




// @ts-ignore
// @ts-ignore
// @ts-ignore
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
    Navbar2Component,
    NewPageComponent,
    AboutUsComponent,
    ConsServiceComponent,
    BookServiceComponent,
    ContactUsComponent,
    AwardsHonoursComponent,
    ClientListComponent,
    VaastuBooksComponent,
    ResidentialVaastuComponent,
    CommercialVaastuComponent,
    PalmistryServiceComponent,
    NumerologyServiceComponent,
    InstituteIvjlComponent,
    FacultyServiceComponent,
    AdmissionCurriculumComponent,
    SpecialCoursesComponent,
    DistanceLearningComponent,
    KundaliMatrimonyComponent,
    PrivacyPolicyComponent,
    VaastuArticlesComponent,
    AstrologyArticlesComponent,
    NumerologyArticlesComponent,
    FengshuiArticlesComponent,
    GemstoneArticlesComponent,
    PyravaastuArticlesComponent,
    KuaNumberComponent,
    ShopofficeNumberComponent,
    ExistingPlotComponent,
    HindiBooksComponent,
    EnglishBooksComponent,
    PhotoGalleryComponent,
    EducationalVaastuComponent,
    FactoriesVaastuComponent,
    HospitalsVaastuComponent,
    ShopsVaastuComponent,
    BanksVaastuComponent,
    DrawingroomVaastuComponent,
    KitchensVaastuComponent,
    MasterbedroomVaastuComponent,
    KidsbedroomVaastuComponent,
    WatersourceVaastuComponent,
    FengshuiHealthComponent,
    FengshuiWealthComponent,
    FengshuiEducationComponent,
    FengshuiHarmonyComponent,
    FengshuiOfficeComponent,
    VaastuCareerComponent,
    MarriageVaastuComponent,
    EducationVaastuComponent,
    BusinessVaastuComponent,
    VaastuWealthComponent,
    BlogComponent,
    ConsultationServicesComponent,
    ArticlesComponent,
    OnlineServicesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    NgbModule
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
