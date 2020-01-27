import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { teacher } from '../../models/teacher';

@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.page.html',
  styleUrls: ['./showteacher.page.scss'],
})
export class ShowteacherPage implements OnInit {

  idDatateacher: any;
  showDatateacher :teacher;
  getdatateacher: FormGroup;


  constructor(public callapi:CallapiService ,public router : Router,public formbuilder : FormBuilder, public activate: ActivatedRoute) {
    this.idDatateacher = this.activate.snapshot.paramMap.get('_data');
    this.getdatateacher = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required]
    });

   }
  
 
  ngOnInit() {
    this.getTeacherById();

  }

  getTeacherById() {
    this.callapi.getByIdTeacher(this.idDatateacher).subscribe(it => {
      this.showDatateacher = it;
      console.log(this.showDatateacher);
      
      // for (let index = 0; index < Object.keys(this.showDatateacher.course).length; index++) {
      //   this.showcourseteacher[index] = this.showDatateacher.course[index];
      //   console.log(this.showcourseteacher[index]);
      //   this.a = this.showcourseteacher;
      //   console.log(this.a);

      // }


    });

}

}