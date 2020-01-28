import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdetailopencourse',
  templateUrl: './showdetailopencourse.page.html',
  styleUrls: ['./showdetailopencourse.page.scss'],
})
export class ShowdetailopencoursePage implements OnInit {

  idcourse : any;
  all :any;

  constructor(public callapi: CallapiService,public activate: ActivatedRoute) { 
    this.idcourse = this.activate.snapshot.paramMap.get('id');
    console.log(this.idcourse);

  }

  ngOnInit() {
    this.getTeacherByIdinOpencourse();
  }

  getTeacherByIdinOpencourse() {
    this.callapi.getByIdOpenCourse(this.idcourse).subscribe(it => {
      console.log(it);
      this.idcourse = it;
      this.all = it;
      console.log(this.all);
      

});
  }


}
