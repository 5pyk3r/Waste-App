import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ErrorComponent} from './error/error.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {WasteComponent} from './waste/waste.component';
import {CreateWasteComponent} from './waste/create-waste/create-waste.component';
import {SearchWasteComponent} from './waste/search-waste/search-waste.component';
import {MetalsComponent} from './info/metals/metals.component';
import {GlassComponent} from './info/glass/glass.component';
import {MixedComponent} from './info/mixed/mixed.component';
import {BioComponent} from './info/bio/bio.component';
import {PaperComponent} from './info/paper/paper.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'waste', component: CreateWasteComponent, canActivate: [RouteGuardService]},
  {path: 'waste/:id', component: WasteComponent, canActivate: [RouteGuardService]},
  {path: 'search/:name', component: SearchWasteComponent},
  {path: 'metals', component: MetalsComponent},
  {path: 'glass', component: GlassComponent},
  {path: 'bio', component: BioComponent},
  {path: 'mixed', component: MixedComponent},
  {path: 'paper', component: PaperComponent},
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class RoutingModule { }
