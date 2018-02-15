import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

const homeRoutes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      homeRoutes
    ), FormsModule
  ],
  declarations: [HomeComponent],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
