import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      loginRoutes
    ), FormsModule
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
