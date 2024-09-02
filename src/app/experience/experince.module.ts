import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { ExperienceComponent } from "./experience.component";
import { experience_routing } from "./experience-routing";

@NgModule({
    declarations:[ExperienceComponent],
    imports:[
        CommonModule,
        SharedModuleModule, 
        experience_routing
    ],
    exports:[]
})

export class ExperienceModule{}