import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowteacherPageRoutingModule } from './showteacher-routing.module';

import { ShowteacherPage } from './showteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShowteacherPageRoutingModule
  ],
  declarations: [ShowteacherPage]
})
export class ShowteacherPageModule {}
