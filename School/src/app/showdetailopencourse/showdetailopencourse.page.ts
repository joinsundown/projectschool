import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { ActivatedRoute } from '@angular/router';
import { openCourse } from 'src/models/openCourse';

@Component({
  selector: 'app-showdetailopencourse',
  templateUrl: './showdetailopencourse.page.html',
  styleUrls: ['./showdetailopencourse.page.scss'],
})
export class ShowdetailopencoursePage implements OnInit {

  idcourse: any;
  all: openCourse;
  getalldataopencourse: openCourse;
  xxx:any;

  constructor(public callapi: CallapiService, public activate: ActivatedRoute) {
    this.idcourse = this.activate.snapshot.paramMap.get('idc');
    console.log(this.idcourse);

  }

  ngOnInit() {
    this.getTeacherinOpencourse();

  }

  getTeacherinOpencourse() {
    this.callapi.getByIdOpenCourse(this.idcourse).subscribe(it => {
      console.log(it);
      this.all = it;
      console.log(this.all.teachers);
      
      this.xxx = this.all.teachers;

      // console.log(this.all.teachers);
      // for (let index = 0; index < this.all.teachers.length; index++) {
      //   const element = array[index];
        
      // }


    });
  }
  getAllDataopenCourse() {
    this.callapi.getAllDataOpenCourse().subscribe(data => {
      this.getalldataopencourse = data;
      console.log(this.getalldataopencourse);

    });

  }


}
