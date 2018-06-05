import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes, Router } from '@angular/router';
import {SidebarModule} from 'ng-sidebar';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ImmortalsComponent } from './components/immortals/immortals.component';
import { LegendsComponent } from './components/legends/legends.component';

var appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'immortals', component:ImmortalsComponent},
  {path:'legends', component:LegendsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImmortalsComponent,
    LegendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
