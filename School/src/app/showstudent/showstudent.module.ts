import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowstudentPageRoutingModule } from './showstudent-routing.module';

import { ShowstudentPage } from './showstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShowstudentPageRoutingModule
  ],
  declarations: [ShowstudentPage]
})
export class ShowstudentPageModule {}
