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

  constructor(public callapi: CallapiService, public activate: ActivatedRoute) {
    this.idcourse = this.activate.snapshot.paramMap.get('id');
    console.log(this.idcourse);

  }

  ngOnInit() {
    this.getTeacherByIdinOpencourse();

  }

  getTeacherByIdinOpencourse() {
    this.callapi.getByIdOpenCourse(this.idcourse).subscribe(it => {
      console.log(it);

      this.all = it;
      console.log(this.all);


    });
  }
  // getAllDataopenCourse() {
  //   this.callapi.getAllDataOpenCourse().subscribe(data => {
  //     this.getalldataopencourse = data;
  //     console.log(this.getalldataopencourse);

  //   });

  // }


}
