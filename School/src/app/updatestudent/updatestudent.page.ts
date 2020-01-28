import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { student } from 'src/models/student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.page.html',
  styleUrls: ['./updatestudent.page.scss'],
})
export class UpdatestudentPage implements OnInit {

  idUpdateStudent: any;
  allDataUpdateStudent: FormGroup;
  updateDataStudnet: student;


  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.idUpdateStudent = this.activate.snapshot.paramMap.get('_id');
    console.log(this.idUpdateStudent);
    this.allDataUpdateStudent = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'usernameStudent': [null, Validators.required],
      'passwordStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required],
      'statusStudent': [null, Validators.required],

    });
   }

  ngOnInit() {
    this.getByIdUpdateStudent();
  }

  getByIdUpdateStudent() {
    this.callapi.getByIdStudent(this.idUpdateStudent).subscribe(it => {
      console.log(it);
      this.allDataUpdateStudent.patchValue(it)
      console.log(this.allDataUpdateStudent.value);
    });
  } 

  editIdStudent() {
    this.updateDataStudnet = this.allDataUpdateStudent.value;
    console.log(this.updateDataStudnet);
    this.callapi.editStudent(this.idUpdateStudent, this.updateDataStudnet).subscribe(it => {
    });
  }

}
