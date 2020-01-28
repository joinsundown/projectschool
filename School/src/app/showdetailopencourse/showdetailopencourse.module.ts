import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowdetailopencoursePageRoutingModule } from './showdetailopencourse-routing.module';

import { ShowdetailopencoursePage } from './showdetailopencourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowdetailopencoursePageRoutingModule
  ],
  declarations: [ShowdetailopencoursePage]
})
export class ShowdetailopencoursePageModule {}
