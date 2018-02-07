import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing.module';
import { LoginModule } from '../login/login.module';
import {bootstrap} from 'bootstrap';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    LoginModule
  ],
  declarations: []
})
export class IndexModule { }