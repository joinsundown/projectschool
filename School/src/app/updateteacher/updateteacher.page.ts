import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { teacher } from 'src/models/teacher';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.page.html',
  styleUrls: ['./updateteacher.page.scss'],
})
export class UpdateteacherPage implements OnInit {

  idUpdateTeacher: any;
  allDataUpdateTeacher: FormGroup;
  
  updateDataTeacher: teacher;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.idUpdateTeacher = this.activate.snapshot.paramMap.get('_id');
    console.log(this.idUpdateTeacher);
    this.allDataUpdateTeacher = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'usernameTeacher': [null, Validators.required],
      'passwordTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required]

    });
   }

  ngOnInit() {
    this.getByIdUpdateTeaccher();
  }

  getByIdUpdateTeaccher() {
    this.callapi.getByIdTeacher(this.idUpdateTeacher).subscribe(it => {
      console.log(it);
      this.allDataUpdateTeacher.patchValue(it)
      console.log(this.allDataUpdateTeacher.value);
    });
  } 


  editIdTeaccher() {
    this.updateDataTeacher = this.allDataUpdateTeacher.value;
    console.log(this.updateDataTeacher);
    this.callapi.editTeacher(this.idUpdateTeacher, this.updateDataTeacher).subscribe(it => {
    });
  }

}
