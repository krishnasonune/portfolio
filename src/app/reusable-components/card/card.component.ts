import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Projects } from 'src/app/interface/project';
import * as Aos from 'aos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() project : Projects | undefined;
  @Output() openProject: EventEmitter<Projects> = new EventEmitter();

  openNewTab(proj : Projects | undefined) : void {
    this.openProject.emit(proj);
  }

  ngOnInit(): void {
    Aos.init({
      duration: 700
    });
  }
}
