import { Route, RouterModule, Routes } from "@angular/router";
import { ServiceComponent } from "./service.component";
import { ModuleWithProviders } from "@angular/core";

const routes : Routes = [
    {path: '', component: ServiceComponent},
    {path: 'service', component: ServiceComponent},
    {path: '**', component: ServiceComponent}
]

export const service_routing : ModuleWithProviders<Route> = RouterModule.forChild(routes);