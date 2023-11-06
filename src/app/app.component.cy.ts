import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoginService } from "./services/login/login.service";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";


describe('AppComponent', () => {
  
    it('should redirect to welcome screen when creds are correct', () => {
        cy.mount(AppComponent, {
            imports: [BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                WelcomeComponent, 
                LoginFormComponent],
            providers: [LoginService]
        });

        cy.get('#username').should('exist').type('admin');
        cy.get('#password').type('abc123');
        cy.get('button').click();
        cy.contains('Welcome admin');
    })
});
