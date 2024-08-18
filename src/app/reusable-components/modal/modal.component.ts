import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  @Input() popup_data !: any;
  @Output() closed_popup : EventEmitter<boolean> = new EventEmitter();

  close(){
    this.closed_popup.emit(true)
  }
}
