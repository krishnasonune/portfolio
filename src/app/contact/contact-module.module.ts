import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { contact_routing } from './contact-routing';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    contact_routing
  ]
})
export class ContactModuleModule { }
