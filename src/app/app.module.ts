import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WelcomeComponent, 
    LoginFormComponent,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
