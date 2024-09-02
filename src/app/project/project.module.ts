import { NgModule } from "@angular/core";
import { ProjectComponent } from "./project.component";
import { CommonModule } from "@angular/common";
import { project_routing } from "./project-routing";
import { SharedModuleModule } from "../shared-module/shared-module.module";

@NgModule({
    declarations:[ProjectComponent],
    imports:[
        CommonModule,
        SharedModuleModule, 
        project_routing
    ],
    exports:[]
})

export class ProjectModule{}