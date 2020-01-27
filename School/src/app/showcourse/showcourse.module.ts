import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcoursePageRoutingModule } from './showcourse-routing.module';

import { ShowcoursePage } from './showcourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcoursePageRoutingModule
  ],
  declarations: [ShowcoursePage]
})
export class ShowcoursePageModule {}
