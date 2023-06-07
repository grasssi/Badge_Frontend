import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EfccmComponent } from './efccm/efccm.component';
import { AppRoutingModule } from './app-routing.module';
import { BadgeComponent } from './badge/badge.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableefccmComponent } from './tableefccm/tableefccm.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EfccmComponent,
    BadgeComponent,
    TableefccmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
