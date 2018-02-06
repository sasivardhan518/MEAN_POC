import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }
