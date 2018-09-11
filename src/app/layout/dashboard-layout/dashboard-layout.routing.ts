import { Routes } from "@angular/router";
import { HomeComponent } from "../../components/home/home.component";



export const DashboardLayoutRoutes: Routes = [
    { path: '', component: HomeComponent, data: {title: 'Home'} }
];