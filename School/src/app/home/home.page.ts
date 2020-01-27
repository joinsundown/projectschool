import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  statusop: any;
  teacherData: FormGroup;
  studentData: FormGroup;


  constructor(public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.teacherData = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'usernameTeacher': [null, Validators.required],
      'passwordTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required],
      'status': [null, Validators.required],
    });

    this.studentData = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'usernameStudent': [null, Validators.required],
      'passwordStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required],
      'status': [null, Validators.required],
    });
  }
  ngOnInit() {
    this.statusop;
  }


  gotostatus() {
    console.log(this.statusop);
  }


  addStudent() {
    this.callapi.addStudent(this.studentData.value).subscribe(it => {
    });
    console.log(this.studentData.value);


    this.router.navigate(['/home']);

  }

  addTeacher() {
    this.callapi.addTeacher(this.teacherData.value).subscribe(it => {
    });
    console.log(this.teacherData.value);

    this.router.navigate(['/home']);

  }

}