import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { student } from 'src/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  getdataAllstudent: student;

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.callapi.getAllDataStudent().subscribe(data => {
      this.getdataAllstudent = data;
      console.log(this.getdataAllstudent);

    });
  }
  deleteStudent(id) {
    
    this.callapi.deleteStudent(id).subscribe(data => {
      this.getAllData();
    });

  }
  editTeacher(id) {
    console.log(id);
    
  
    this.router.navigate(['/updateteacher', { _id: id }]);
  }

}
