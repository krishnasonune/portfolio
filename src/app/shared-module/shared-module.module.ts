import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CertificationCardComponent } from './components/certification-card/certification-card.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { LeetcodeCardComponent } from './components/leetcode-card/leetcode-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;



@NgModule({
  declarations: [
    CardComponent,
    CertificationCardComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    HeatmapComponent,
    LeetcodeCardComponent,
    ModalComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    PlotlyModule,
  ],
  exports: [
    CardComponent,
    CertificationCardComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    HeatmapComponent,
    LeetcodeCardComponent,
    ModalComponent,
    TestimonialCardComponent,
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class SharedModuleModule { }
