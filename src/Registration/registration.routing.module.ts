import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';

const registrationRoutes: Routes = [
  {path:'register', component: RegistrationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      registrationRoutes
    )
  ],
  declarations: [RegistrationComponent],
  exports: [
    RouterModule
  ]
})
export class RegistrationRoutingModule { }
