import { Route, RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { EducationComponent } from "./education.component";

const routes : Routes = [
    {
        path: '',
        component: EducationComponent
    },
    {
        path: 'project',
        component: EducationComponent
    },
    {
        path: '**',
        component: EducationComponent
    }
]

export const education_routing : ModuleWithProviders<Route> = RouterModule.forChild(routes);