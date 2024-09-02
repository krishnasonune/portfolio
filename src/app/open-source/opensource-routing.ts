import { Route, RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { OpenSourceComponent } from "./open-source.component";

const routes : Routes = [
    {
        path: '',
        component: OpenSourceComponent
    },
    {
        path: 'opensource',
        component: OpenSourceComponent
    },
    {
        path: '**',
        component: OpenSourceComponent
    }
]

export const open_source_routing : ModuleWithProviders<Route> = RouterModule.forChild(routes);