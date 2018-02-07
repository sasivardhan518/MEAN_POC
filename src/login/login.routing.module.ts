import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      loginRoutes
    )
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
