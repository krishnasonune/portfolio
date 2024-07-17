import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HeroicComponent } from './heroic/heroic.component';
import { routing } from './app-routing';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from './reusable-components/card/card.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationCardComponent } from './reusable-components/education-card/education-card.component';
import { CertificationCardComponent } from './reusable-components/certification-card/certification-card.component';
import { ExperienceCardComponent } from './reusable-components/experience-card/experience-card.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { TestimonialCardComponent } from './reusable-components/testimonial-card/testimonial-card.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenSourceComponent } from './open-source/open-source.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    SplashComponent,
    HeroicComponent,
    ProjectComponent,
    FooterComponent,
    CardComponent,
    EducationComponent,
    ExperienceComponent,
    EducationCardComponent,
    CertificationCardComponent,
    ExperienceCardComponent,
    ContactComponent,
    ServiceComponent,
    TestimonialCardComponent,
    OpenSourceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    NgApexchartsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
