import { Route, RouterModule, Routes } from "@angular/router";
import { ProjectComponent } from "./project.component";
import { ModuleWithProviders } from "@angular/core";

const routes : Routes = [
    {
        path: '',
        component: ProjectComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: '**',
        component: ProjectComponent
    }
]

export const project_routing : ModuleWithProviders<Route> = RouterModule.forChild(routes);