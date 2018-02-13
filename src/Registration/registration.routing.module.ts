import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';

const registrationRoutes: Routes = [
  {path:'register', component: RegistrationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      registrationRoutes
    ), FormsModule
  ],
  declarations: [RegistrationComponent],
  exports: [
    RouterModule
  ]
})
export class RegistrationRoutingModule { }
