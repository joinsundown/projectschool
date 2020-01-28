import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { course } from 'src/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  courseData : FormGroup;
  addcourseData : course;

  constructor(public callapi:CallapiService,public formbuilder: FormBuilder) { 
    this.courseData = this.formbuilder.group({
      'idCourse':[null,Validators.required],
      'nameCourse':[null,Validators.required]
    });

  }

  ngOnInit() {
  }

  
  AddCourse(){
    this.addcourseData = (this.courseData.value);
    console.log(this.addcourseData); 
    this.callapi.addCourse2(this.addcourseData).subscribe(it =>{
      console.log(it);
      
    });
  }

}
