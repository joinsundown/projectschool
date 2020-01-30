import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { student } from 'src/models/student';
import { openCourse } from 'src/models/openCourse';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.page.html',
  styleUrls: ['./showstudent.page.scss'],
})
export class ShowstudentPage implements OnInit {

  idDatastudent: any;
  showDatastudent: student;
  getdatastudent: FormGroup;

  getalldataopencourse: openCourse;

  idcourse: any;
  getIdCourse: any;
  all: openCourse;

  getcourse : openCourse;
  showOpencourse : openCourse[] = [];
 
  

  dataaa = {
    'idCourse': "",
    'nameCourse': "",
    'teacher': [],
    'student':[]
  };

  constructor(public callapi: CallapiService, public router: Router, public formbuilder: FormBuilder, public activate: ActivatedRoute) {
    this.idDatastudent = this.activate.snapshot.paramMap.get('_data');

    this.getdatastudent = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'statusStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required]
    });

  }
  ngOnInit() {
    this.getByIdStudent();
    this.getAllDataopenCourse();
    // this.getbyidcourse();
  }

  getByIdStudent() {
    this.callapi.getByIdStudent(this.idDatastudent).subscribe(it => {
      this.showDatastudent = it;
      console.log(this.showDatastudent);
    });

  }
  getAllDataopenCourse() {

    this.callapi.getAllDataOpenCourse().subscribe(data => {
      this.getalldataopencourse = data;
      console.log(this.getalldataopencourse);

    });
  }
  getcoursebyid(id,a){
    this.router.navigate(['/showdetailopencourse',{idc:id}])
    this.getIdCourse = a;
    console.log( this.getIdCourse);
    
  }

  addCourseStudent(getId:string) {
    console.log(getId);
    // this.getcourse = this.showOpencourse.find(it => it.idCourse == this.getIdCourse);
    this.dataaa.idCourse = getId;
    // this.dataaa.nameCourse = this.getcourse.nameCourse.toString();
    this.dataaa.student.push(this.showDatastudent);
    console.log(this.dataaa);
    console.log(this.dataaa.student);
    this.callapi.AddStudentInOpenCourse(this.dataaa.idCourse,this.dataaa.student[0]).subscribe(it=>{
        console.log(it);
        
    });
    
}
 
}
