import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormControl,FormGroup} from '@angular/forms';
import { RegistrationRoutingModule } from './registration.routing.module';
import { RegistrationService } from './shared/registration.service';

@NgModule({
  imports: [
    BrowserModule,
    RegistrationRoutingModule,
  ],
  declarations: [],
  providers: [RegistrationService]
})

export class RegistrationModule {}

