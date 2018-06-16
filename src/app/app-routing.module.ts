import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout-routing.module#LayoutRoutingModule'
  },
  {
    path: 'dashboard',
    loadChildren: './layout/layout-routing.module#LayoutRoutingModule'
  },
  {
    path: 'login',
    loadChildren: './auth/auth-routing.module#AuthRoutingModule'
  },
  {
    path: 'register',
    loadChildren: './auth/auth-routing.module#AuthRoutingModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
