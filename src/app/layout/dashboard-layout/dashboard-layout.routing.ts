import { Routes } from "@angular/router";
import { ComponentsComponent } from "@app/components";



export const DashboardLayoutRoutes: Routes = [
    { path: '', component: ComponentsComponent, loadChildren: '@app/components/components.module#ComponentsModule' }
];