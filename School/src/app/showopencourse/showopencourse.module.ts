import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowopencoursePageRoutingModule } from './showopencourse-routing.module';

import { ShowopencoursePage } from './showopencourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowopencoursePageRoutingModule
  ],
  declarations: [ShowopencoursePage]
})
export class ShowopencoursePageModule {}
