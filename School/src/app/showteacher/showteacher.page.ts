import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { teacher } from '../../models/teacher';
import { course } from 'src/models/course';
import { openCourse } from 'src/models/openCourse';

@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.page.html',
  styleUrls: ['./showteacher.page.scss'],
})
export class ShowteacherPage implements OnInit {

  idDatateacher: any;
  showDatateacher: teacher;
  getdatateacher: FormGroup;
  getIdCourse: any;
  getcourse: course;
  showCourse: course[] = [];
  courseData: FormGroup;

  dataTeacher:openCourse[]=[];
  // dataOpenCourse: openCourse;

  dataaa = {
    'idCourse': "",
    'nameCourse': "",
    'teacher': [],
    'student': []
  };

  constructor(public callapi: CallapiService, public router: Router, public formbuilder: FormBuilder, public activate: ActivatedRoute) {
    this.idDatateacher = this.activate.snapshot.paramMap.get('_data');

    this.getdatateacher = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required]
    });

    this.courseData = this.formbuilder.group({
      'id_Course': [null, Validators.required],
      'name_Course': [null, Validators.required]

    });

  }


  ngOnInit() {
    this.getTeacherById();
    this.getCourse();
    this.getCourse2();

  }

  getTeacherById() {
    this.callapi.getByIdTeacher(this.idDatateacher).subscribe(it => {
      this.showDatateacher = it;
      // console.log(this.showDatateacher);

    });

  }

  getCourse() {
    this.callapi.getAllDataOpenCourse().subscribe(it => {
      for (let index = 0; index < Object.keys(it).length; index++) {
        this.showCourse[index] = it[index]
      }
      // this.showCourse.push(it)
      console.log(this.showCourse);
    });
  }

  getCourse2() {
    
    this.callapi.getAllDataOpenCourse().subscribe(it => {
      console.log(it);
      for (let index = 0; index < Object.keys(it).length; index++) {
        this.dataTeacher[index] = it[index];
        
      }
      console.log(this.dataTeacher);
      console.log(this.dataTeacher[0].teachers[0].idTeacher);
      var filter = this.dataTeacher.filter(it => it.teachers.find(it => it.idTeacher == this.idDatateacher));
      console.log(filter);
      
    });
  }

  chang(s) {
    this.getIdCourse = s;
    console.log(this.getIdCourse);
  }

  addCourseTeacher() {
    
    this.getcourse = this.showCourse.find(it => it.idCourse == this.getIdCourse);
    // console.log(this.getcourse);
    // console.log(this.showDatateacher);
    this.dataaa.idCourse = this.getcourse.idCourse.toString();
    this.dataaa.nameCourse = this.getcourse.nameCourse.toString();
    this.dataaa.teacher.push(this.showDatateacher);
    // this.test.push(this.showDatateacher)
    // console.log(this.test);
    // this.data.teacher = this.test;
    // console.log(this.dataaa);
    this.callapi.AddTeacherInOpenCourse(this.getIdCourse,this.showDatateacher).subscribe(it=>{
      console.log(it);
      
    })
    // console.log(this.dataaa);


    // this.dataOpenCourse.datateacher = this.test;
    // console.log(this.dataOpenCourse.datateacher); 
 
  }





}