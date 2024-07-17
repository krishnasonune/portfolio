import { Component, Input } from '@angular/core';
import { certification } from 'src/app/interface/certification';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.css']
})
export class CertificationCardComponent {
  @Input() certificates : certification | undefined;
}
