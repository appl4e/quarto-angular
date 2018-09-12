// importing builtin modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from 'node_modules/ngx-owl-carousel';

import { AppRoutingModule } from './app.routing'; //adding routes from app routing module

// importing components
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { DashboardLayoutComponent } from './layout';

import { LayoutModule } from './layout';
import { AuthenticationModule } from './authentication';




@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    OwlModule,
    AppRoutingModule,
    LayoutModule,
    AuthenticationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
