import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index.component';

const indexRoutes: Routes = [
  { path: 'index', component: IndexComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      indexRoutes
    )
  ],
  declarations: [IndexComponent],
  exports: [
    RouterModule
  ]
})
export class IndexRoutingModule { }
