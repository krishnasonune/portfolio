import { Route, RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ModuleWithProviders } from "@angular/core";

const route : Routes = [
    {
        path: "",
        component: ContactComponent
    },
    {path: "**", component: ContactComponent}
]

export const contact_routing : ModuleWithProviders<Route> = RouterModule.forChild(route);