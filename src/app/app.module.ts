import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { IndexModule } from '../index/index.module';
import {bootstrap} from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomModalComponent } from '../customModal/customModal.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomModalComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    IndexModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents:[CustomModalComponent]
})
export class AppModule { }
