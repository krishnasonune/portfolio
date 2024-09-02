import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { service_routing } from './service-routing';
import { ModalComponent } from '../shared-module/components/modal/modal.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    service_routing,
    SharedModuleModule
  ]
})
export class ServiceModuleModule { }
