import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { EducationComponent } from "./education.component";
import { education_routing } from "./education-routing";

@NgModule({
    declarations:[EducationComponent],
    imports:[
        CommonModule,
        SharedModuleModule, 
        education_routing
    ],
    exports:[]
})

export class EducationModule{}