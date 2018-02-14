import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { LoginService } from './shared/login.service';
import { CustomModalComponent } from '../customModal/customModal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [],
  providers: [LoginService]
})

export class LoginModule { }
