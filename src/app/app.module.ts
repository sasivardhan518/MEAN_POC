import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { IndexModule } from '../index/index.module';
import {bootstrap} from 'bootstrap';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,    
    IndexModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
