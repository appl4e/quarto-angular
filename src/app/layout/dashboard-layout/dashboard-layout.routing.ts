import { Routes } from "@angular/router";
import { HomeComponent } from "@app/components";



export const DashboardLayoutRoutes: Routes = [
    { path: '', component: HomeComponent, data: {title: 'Home'} }
];