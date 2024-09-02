import { NgModule } from "@angular/core";
import { OpenSourceComponent } from "./open-source.component";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { open_source_routing } from "./opensource-routing";
import { NgChartsModule } from "ng2-charts";

@NgModule({
    declarations:[OpenSourceComponent],
    imports:[
        CommonModule,
        SharedModuleModule,
        NgChartsModule,
        open_source_routing
    ],
    exports:[]
})

export class OpenSourceModule{}