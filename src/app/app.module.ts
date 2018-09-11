// importing builtin modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing'; //adding routes from app routing module

// importing components
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

import { OwlModule } from '../../node_modules/ngx-owl-carousel';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
