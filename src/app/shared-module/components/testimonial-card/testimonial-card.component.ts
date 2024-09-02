import { Component, Input } from '@angular/core';
import { testinomial } from 'src/app/interface/testinomial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() testinomial : testinomial | undefined;
}
