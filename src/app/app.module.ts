import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LayoutModule } from './layout/layout.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    LayoutRoutingModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
