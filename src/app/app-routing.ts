import { Route, RouterModule, Routes } from "@angular/router";
import { HeroicComponent } from "./heroic/heroic.component";
import { ModuleWithProviders } from "@angular/core";
import { ProjectComponent } from "./project/project.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "../app/contact/contact.component";
import { ServiceComponent } from "../app/service/service.component";
import { OpenSourceComponent } from "./open-source/open-source.component";

const route : Routes = [
    {path: "", component: HeroicComponent},
    {path: "home", component: HeroicComponent},
    {
        path: "project",
        loadChildren: () => import('./project/project.module').then(project => project.ProjectModule)
    },
    {
        path: "education",
        loadChildren: () => import('./education/education.module').then(edu => edu.EducationModule)
    },
    {
        path: "experience",
        loadChildren: () => import('./experience/experince.module').then(experience => experience.ExperienceModule)
    },
    {
        path: "service",
        loadChildren: () => import('./service/service-module.module').then(service => service.ServiceModuleModule)
    },
    {
        path: "opensource",
        loadChildren: () => import('./open-source/opensource.module').then(opensource => opensource.OpenSourceModule)
    },
    {
        path: "contact",
        loadChildren: () => import('./contact/contact-module.module').then(contact => contact.ContactModuleModule)
    },
    {path: "**", component: HeroicComponent}
]

export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(route);