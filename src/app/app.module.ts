import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routes';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { XHRBackend, RequestOptions } from '@angular/http';
import { HttpService } from './http.service';
import { httpServiceFactory } from './http-service.factory';
import { ProjetosModule } from './projetos/projetos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    DialogComponent,
    CadastroComponent,
    LoaderComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterializeModule,
    MdDialogModule,
    routing,
    ReactiveFormsModule,
    SweetAlert2Module,
    ProjetosModule


  ],
  providers: [LoaderService,
        {

            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService ]
        },

        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
