import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../Registration/registration.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    LoginModule,
    RegistrationModule,
    HomeModule
  ],
  declarations: []
})
export class IndexModule { }