import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowdatastudentPage } from './showdatastudent.page';

const routes: Routes = [
  {
    path: '',
    component: ShowdatastudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowdatastudentPageRoutingModule {}
