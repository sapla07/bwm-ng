import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { Routes, RouterModule, Route } from  '@angular/router';


import { AppComponent } from './app.component';
import { headerComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';

const routes : Routes = [
  {path:'', redirectTo: '/rentals' , pathMatch: 'full'} 
]
   


@NgModule({
  declarations: [
    AppComponent,
    headerComponent, 
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
