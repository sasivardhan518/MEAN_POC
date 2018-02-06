import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { AppComponent } from './app.component';
import { IndexComponent } from '../index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login',        component: LoginComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
