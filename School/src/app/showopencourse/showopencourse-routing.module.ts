import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowopencoursePage } from './showopencourse.page';

const routes: Routes = [
  {
    path: '',
    component: ShowopencoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowopencoursePageRoutingModule {}
