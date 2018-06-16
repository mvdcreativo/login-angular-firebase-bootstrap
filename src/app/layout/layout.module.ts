import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    NavBarComponent, 
    DashboardComponent
  ]
})
export class LayoutModule { }
