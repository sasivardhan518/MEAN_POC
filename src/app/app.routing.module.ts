import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'', redirectTo:'/index', pathMatch:'full'}
];

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ), FormsModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers:[HttpClient]
})
export class AppRoutingModule { }
