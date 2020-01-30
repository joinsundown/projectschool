import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { ActivatedRoute } from '@angular/router';
import { openCourse } from 'src/models/openCourse';

@Component({
  selector: 'app-showdatastudent',
  templateUrl: './showdatastudent.page.html',
  styleUrls: ['./showdatastudent.page.scss'],
})
export class ShowdatastudentPage implements OnInit {

  xxx:any;
  all: openCourse;
  idcourse :any;

  constructor(public callapi: CallapiService, public activate: ActivatedRoute) { 
    this.idcourse = this.activate.snapshot.paramMap.get('idc');
    console.log(this.idcourse);
  }

  ngOnInit() {
    this.getStudentinOpencourse();
  }

  getStudentinOpencourse() {
    this.callapi.getByIdOpenCourse(this.idcourse).subscribe(it => {
      console.log(it);
      this.all = it;
      console.log(this.all.students);
      
      this.xxx = this.all.students;

      // console.log(this.all.teachers);
      // for (let index = 0; index < this.all.teachers.length; index++) {
      //   const element = array[index];
        
      // }


    });
  }

}
