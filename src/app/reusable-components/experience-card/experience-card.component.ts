import { Component, Input } from '@angular/core';
import { experience } from 'src/app/interface/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() detail: experience | undefined;
}
