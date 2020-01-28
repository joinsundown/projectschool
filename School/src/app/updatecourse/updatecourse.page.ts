import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { course } from 'src/models/course';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.page.html',
  styleUrls: ['./updatecourse.page.scss'],
})
export class UpdatecoursePage implements OnInit {

  idUpdateCourse: any;
  allDataUpdateCourse: FormGroup;
  updateDataCourse: course;



  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {

    this.idUpdateCourse = this.activate.snapshot.paramMap.get('_id');
    console.log(this.idUpdateCourse);
    this.allDataUpdateCourse = this.formbuilder.group({
      'idCourse': [null, Validators.required],
      'nameCourse': [null, Validators.required],

    });
   }

  ngOnInit() {
    this.getByIdUpdateCourse();
  }

  getByIdUpdateCourse() {
    this.callapi.getByIdCourse(this.idUpdateCourse).subscribe(it => {
      console.log(it);
      this.allDataUpdateCourse.patchValue(it)
      console.log(this.allDataUpdateCourse.value);
    });
  } 

  editIdCourse() {
    this.updateDataCourse = this.allDataUpdateCourse.value;
    console.log(this.updateDataCourse);
    this.callapi.editCourse(this.idUpdateCourse, this.updateDataCourse).subscribe(it => {
    });
  }

}
