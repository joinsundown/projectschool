import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { openCourse } from 'src/models/openCourse';

@Component({
  selector: 'app-showopencourse',
  templateUrl: './showopencourse.page.html',
  styleUrls: ['./showopencourse.page.scss'],
})
export class ShowopencoursePage implements OnInit {

  getalldataopencourse : openCourse;
 

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllDataopenCourse();
  }
getAllDataopenCourse(){

  this.callapi.getAllDataOpenCourse().subscribe(data => {
    this.getalldataopencourse = data;
    console.log(this.getalldataopencourse);

  });

}
showdetailopencourse(id){
  this.router.navigate(['/showdetailopencourse' ,{id}] )

}

}
