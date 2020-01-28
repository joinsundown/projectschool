import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowdetailopencoursePage } from './showdetailopencourse.page';

const routes: Routes = [
  {
    path: '',
    component: ShowdetailopencoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowdetailopencoursePageRoutingModule {}
