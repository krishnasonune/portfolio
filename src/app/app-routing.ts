import { Route, RouterModule, Routes } from "@angular/router";
import { HeroicComponent } from "./heroic/heroic.component";
import { ModuleWithProviders } from "@angular/core";
import { ProjectComponent } from "./project/project.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "../app/contact/contact.component";
import { ServiceComponent } from "../app/service/service.component";

const route : Routes = [
    {path: "", component: HeroicComponent},
    {path: "home", component: HeroicComponent},
    {path: "project", component: ProjectComponent},
    {path: "education", component: EducationComponent},
    {path: "experience", component: ExperienceComponent},
    {path: "service", component: ServiceComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: HeroicComponent}
]

export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(route);