import { Component, Input } from '@angular/core';
import { education } from 'src/app/interface/education';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  @Input() EducationDetails : education | undefined;
}
