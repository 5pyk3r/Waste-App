import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {RoutingModule} from './routing.module';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {HttpIntercepterBasicAuthService} from './service/http/http-intercepter-basic-auth.service';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap';
import {WasteComponent} from './waste/waste.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateWasteComponent } from './waste/create-waste/create-waste.component';
import { SearchWasteComponent } from './waste/search-waste/search-waste.component';
import { MetalsComponent } from './info/metals/metals.component';
import { GlassComponent } from './info/glass/glass.component';
import { PaperComponent } from './info/paper/paper.component';
import { BioComponent } from './info/bio/bio.component';
import { MixedComponent } from './info/mixed/mixed.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent,
    LogoutComponent,
    FooterComponent,
    WasteComponent,
    CreateWasteComponent,
    SearchWasteComponent,
    MetalsComponent,
    GlassComponent,
    PaperComponent,
    BioComponent,
    MixedComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule, FormsModule, BsDropdownModule.forRoot(),
    MatSelectModule, MatToolbarModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
