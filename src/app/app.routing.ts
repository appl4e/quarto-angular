import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';

const routes: Routes = [
  {
    path: 'framework',
    component: FrameworkComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
