import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HeroicComponent } from './heroic/heroic.component';
import { routing } from './app-routing';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { OpenSourceComponent } from './open-source/open-source.component';
import { NgChartsModule } from 'ng2-charts';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    SplashComponent,
    HeroicComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
