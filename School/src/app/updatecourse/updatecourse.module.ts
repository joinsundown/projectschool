import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecoursePageRoutingModule } from './updatecourse-routing.module';

import { UpdatecoursePage } from './updatecourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdatecoursePageRoutingModule
  ],
  declarations: [UpdatecoursePage]
})
export class UpdatecoursePageModule {}
