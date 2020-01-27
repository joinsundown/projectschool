import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { student } from 'src/models/student';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.page.html',
  styleUrls: ['./showstudent.page.scss'],
})
export class ShowstudentPage implements OnInit {

  idDatateacher: any;
  showDatastudent :student;
  getdatastudent: FormGroup;

  constructor(public callapi:CallapiService ,public router : Router,public formbuilder : FormBuilder, public activate: ActivatedRoute) {
    this.idDatateacher = this.activate.snapshot.paramMap.get('_data');
    
    this.getdatastudent = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required]
    });

   }
  ngOnInit() {
    this.getByIdStudent();
  }

  getByIdStudent() {
    this.callapi.getByIdStudent(this.idDatateacher).subscribe(it => {
      this.showDatastudent = it;
      console.log(this.showDatastudent);
    });

  }
}
