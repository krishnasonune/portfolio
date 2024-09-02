import { Route, RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ExperienceComponent } from "./experience.component";

const routes : Routes = [
    {
        path: '',
        component: ExperienceComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: '**',
        component: ExperienceComponent
    }
]

export const experience_routing : ModuleWithProviders<Route> = RouterModule.forChild(routes);