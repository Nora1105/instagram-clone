import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormBannerComponent, LoginFormComponent, LoginFormFooterComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginFormBannerComponent,
    LoginFormFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
