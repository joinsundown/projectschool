import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router } from '@angular/router';
import { teacher } from 'src/models/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  
  getdataAllteacher: teacher;

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {

    this.getAllData();
  }
  ionViewDidEnter() {
    this.getAllData();
  }

  getAllData() {
    this.callapi.getAllDataTeacher().subscribe(data => {
      this.getdataAllteacher = data;
      console.log(this.getdataAllteacher);

    });
  }

}
