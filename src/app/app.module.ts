import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { Routes, RouterModule, Route } from  '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';
import { ManageModule } from './manage/manage.module'

import { AppComponent } from './app.component';
import { headerComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';



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
    AuthModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
