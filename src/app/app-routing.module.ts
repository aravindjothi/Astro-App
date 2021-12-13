import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Navbar1Component} from "./navbar1/navbar1.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {CourseInfoComponent} from "./course-info/course-info.component";
import {CourseGalleryComponent} from "./course-gallery/course-gallery.component";
import {Navbar2Component} from "./navbar2/navbar2.component";
import {WelAstroComponent} from "./wel-astro/wel-astro.component";
import {NewPageComponent} from "./new-website/web-disclaimer/new-page.component";
import {FooterSecComponent} from "./footer-sec/footer-sec.component";
import {ConsServiceComponent} from "./cons-service/cons-service.component";
import {BookServiceComponent} from "./book-service/book-service.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AwardsHonoursComponent} from "./awards-honours/awards-honours.component";
import {ClientListComponent} from "./client-list/client-list.component";
import {VaastuBooksComponent} from "./vaastu-books/vaastu-books.component";
import {ResidentialVaastuComponent} from "./residential-vaastu/residential-vaastu.component";
import {CommercialVaastuComponent} from "./commercial-vaastu/commercial-vaastu.component";
import {PalmistryServiceComponent} from "./palmistry-service/palmistry-service.component";
import {NumerologyServiceComponent} from "./numerology-service/numerology-service.component";
import {InstituteIvjlComponent} from "./new-website/institute-ivjl/institute-ivjl.component";
import {FacultyServiceComponent} from "./new-website/faculty-service/faculty-service.component";
import {AdmissionCurriculumComponent} from "./new-website/admission-curriculum/admission-curriculum.component";
import {SpecialCoursesComponent} from "./new-website/special-courses/special-courses.component";
import {DistanceLearningComponent} from "./new-website/distance-learning/distance-learning.component";
import {KundaliMatrimonyComponent} from "./new-website/kundali-matrimony/kundali-matrimony.component";
import {PrivacyPolicyComponent} from "./new-website/privacy-policy/privacy-policy.component";
import {VaastuArticlesComponent} from "./new-website/vaastu-articles/vaastu-articles.component";
import {AstrologyArticlesComponent} from "./new-website/astrology-articles/astrology-articles.component";
import {NumerologyArticlesComponent} from "./new-website/numerology-articles/numerology-articles.component";
import {FengshuiArticlesComponent} from "./new-website/fengshui-articles/fengshui-articles.component";
import {GemstoneArticlesComponent} from "./new-website/gemstone-articles/gemstone-articles.component";
import {PyravaastuArticlesComponent} from "./new-website/pyravaastu-articles/pyravaastu-articles.component";
import {KuaNumberComponent} from "./new-website/kua-number/kua-number.component";
import {ShopofficeNumberComponent} from "./new-website/shopoffice-number/shopoffice-number.component";
import {ExistingPlotComponent} from "./new-website/existing-plot/existing-plot.component";
import {HindiBooksComponent} from "./new-website/hindi-books/hindi-books.component";
import {EnglishBooksComponent} from "./new-website/english-books/english-books.component";
import {PhotoGalleryComponent} from "./new-website/photo-gallery/photo-gallery.component";
import {EducationalVaastuComponent} from "./new-website/vaastu-for-business/educational-vaastu/educational-vaastu.component";
import {FactoriesVaastuComponent} from "./new-website/vaastu-for-business/factories-vaastu/factories-vaastu.component";
import {HospitalsVaastuComponent} from "./new-website/vaastu-for-business/hospitals-vaastu/hospitals-vaastu.component";
import {ShopsVaastuComponent} from "./new-website/vaastu-for-business/shops-vaastu/shops-vaastu.component";
import {BanksVaastuComponent} from "./new-website/vaastu-for-business/banks-vaastu/banks-vaastu.component";
import {DrawingroomVaastuComponent} from "./new-website/vaastu-for-residence/drawingroom-vaastu/drawingroom-vaastu.component";
import {KitchensVaastuComponent} from "./new-website/vaastu-for-residence/kitchens-vaastu/kitchens-vaastu.component";
import {MasterbedroomVaastuComponent} from "./new-website/vaastu-for-residence/masterbedroom-vaastu/masterbedroom-vaastu.component";
import {KidsbedroomVaastuComponent} from "./new-website/vaastu-for-residence/kidsbedroom-vaastu/kidsbedroom-vaastu.component";
import {WatersourceVaastuComponent} from "./new-website/vaastu-for-residence/watersource-vaastu/watersource-vaastu.component";
import {FengshuiHealthComponent} from "./new-website/fengshui-you/fengshui-health/fengshui-health.component";
import {FengshuiWealthComponent} from "./new-website/fengshui-you/fengshui-wealth/fengshui-wealth.component";
import {FengshuiEducationComponent} from "./new-website/fengshui-you/fengshui-education/fengshui-education.component";
import {FengshuiHarmonyComponent} from "./new-website/fengshui-you/fengshui-harmony/fengshui-harmony.component";
import {FengshuiOfficeComponent} from "./new-website/fengshui-you/fengshui-office/fengshui-office.component";
import {VaastuCareerComponent} from "./new-website/dailylife-vaastu/vaastu-career/vaastu-career.component";
import {MarriageVaastuComponent} from "./new-website/dailylife-vaastu/marriage-vaastu/marriage-vaastu.component";
import {EducationVaastuComponent} from "./new-website/dailylife-vaastu/education-vaastu/education-vaastu.component";
import {BusinessVaastuComponent} from "./new-website/dailylife-vaastu/business-vaastu/business-vaastu.component";
import {VaastuWealthComponent} from "./new-website/dailylife-vaastu/vaastu-wealth/vaastu-wealth.component";
import {BlogComponent} from "./blog/blog.component";
import {ConsultationServicesComponent} from "./new-website/consultation-services/consultation-services.component";
import {ArticlesComponent} from "./new-website/articles/articles.component";
import {OnlineServicesComponent} from "./new-website/online-services/online-services.component";
import {ProductsComponent} from "./new-website/products/products.component";



const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
    path: '', component: Navbar1Component, children: [
      {path: 'slideshow', component: SlideshowComponent},

    ]
  },
  {
    path: '', component: NewPageComponent, children: [
      {path: 'course-gallery', component: CourseGalleryComponent},
      {path: 'footer', component: FooterSecComponent}
      ]
  },
  {
    path: 'website-disclaimer', component: NewPageComponent
  },
  {
    path: 'about-us', component: Navbar2Component
  },
  {
    path: 'vaastu-services', component: ConsServiceComponent
  },
  {
    path: 'book-service', component: BookServiceComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'awards-honours', component: AwardsHonoursComponent
  },
  {
    path: 'client-list', component: ClientListComponent
  },
  {
    path: 'vaastu-books', component: VaastuBooksComponent
  },
  {
    path: 'residential-vaastu', component: ResidentialVaastuComponent
  },
  {
    path: 'commercial-vaastu', component: CommercialVaastuComponent
  },
  {
    path: 'palmistry-service', component: PalmistryServiceComponent
  },
  {
    path: 'numerology-service', component: NumerologyServiceComponent
  },
  {
    path: 'about-institute-ivjl', component: InstituteIvjlComponent
  },
  {
    path: 'education', component: InstituteIvjlComponent
  },
  {
    path: 'our-faculty', component: FacultyServiceComponent
  },
  {
    path: 'admission-curriculum' , component: AdmissionCurriculumComponent
  },
  {
    path: 'special-courses', component: SpecialCoursesComponent
  },
  {
    path: 'distance-learning', component: DistanceLearningComponent
  },
  {
    path: 'kundali-matrimony', component: KundaliMatrimonyComponent
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent
  },
  {
    path: 'vaastu-articles', component: VaastuArticlesComponent
  },
  {
    path: 'astrology-articles', component: AstrologyArticlesComponent
  },
  {
    path: 'numerology-articles', component: NumerologyArticlesComponent
  },
  {
    path: 'fengshui-articles', component: FengshuiArticlesComponent
  },
  {
    path: 'gemstone-articles', component: GemstoneArticlesComponent
  },
  {
    path: 'pyravaastu-articles', component: PyravaastuArticlesComponent
  },
  {
    path: 'kua-number', component: KuaNumberComponent
  },
  {
    path: 'shopoffice-number', component: ShopofficeNumberComponent
  },
  {
    path: 'existing-plot', component: ExistingPlotComponent
  },
  {
    path: 'hindi-books', component: HindiBooksComponent
  },
  {
    path: 'english-books', component: EnglishBooksComponent
  },
  {
    path: 'photo-gallery', component: PhotoGalleryComponent
  },
  {
    path: 'educational-vaastu', component: EducationalVaastuComponent
  },
  {
    path: 'factories-vaastu', component: FactoriesVaastuComponent
  },
  {
    path: 'hospitals-vaastu', component: HospitalsVaastuComponent
  },
  {
    path: 'shops-vaastu', component: ShopsVaastuComponent
  },
  {
    path: 'banks-vaastu', component: BanksVaastuComponent
  },
  {
    path: 'drawingroom-vaastu', component: DrawingroomVaastuComponent
  },
  {
    path: 'kitchens-vaastu', component: KitchensVaastuComponent
  },
  {
    path: 'masterbedroom-vaastu', component: MasterbedroomVaastuComponent
  },
  {
    path: 'kidsbedroom-vaastu', component: KidsbedroomVaastuComponent
  },
  {
    path: 'watersource-vaastu', component: WatersourceVaastuComponent
  },
  {
    path: 'fengshui-health', component: FengshuiHealthComponent
  },
  {
    path: 'fengshui-wealth', component: FengshuiWealthComponent
  },
  {
    path: 'fengshui-education', component: FengshuiEducationComponent
  },
  {
    path: 'fengshui-harmony', component: FengshuiHarmonyComponent
  },
  {
    path: 'fengshui-office', component: FengshuiOfficeComponent
  },
  {
    path: 'vaastu-career', component: VaastuCareerComponent
  },
  {
    path: 'marriage-vaastu', component: MarriageVaastuComponent
  },
  {
    path: 'education-vaastu', component: EducationVaastuComponent
  },
  {
    path: 'business-vaastu', component: BusinessVaastuComponent
  },
  {
    path: 'wealth-vaastu', component: VaastuWealthComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'consultation-services', component: ConsultationServicesComponent
  },
  {
    path: 'articles', component: ArticlesComponent
  },
  {
    path: 'online-services', component: OnlineServicesComponent
  },
  {
    path: 'products', component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
