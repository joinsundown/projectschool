import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { teacher } from '../../models/teacher';
import { student } from '../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: FormGroup;
  user1: any;
  datausername: teacher;
  user2: any;
  datausername2: student;



  constructor(public callapi: CallapiService, public formbuilder: FormBuilder , public route:Router) {


    this.user = this.formbuilder.group({
      'user': ["", Validators.required],
      'password': ["", Validators.required]
    });

  }


  ngOnInit() {



  }
  chklogin() {
    if (this.user.value.user != "" && this.user.value.password != "") {
      this.callapi.getDataTeacher(this.user.value.user).subscribe(it => {
        this.datausername = it
        console.log(this.datausername);
        if (this.datausername == null) {
          console.log("ไม่พบยูสเซอร์ครู");
        } 
        else 
        {
          if (this.user.value.user == this.datausername.usernameTeacher && this.user.value.password == this.datausername.passwordTeacher) {
            console.log("welcomeTeacher");
            this.route.navigate(['/showteacher' ,{_data:this.datausername.idTeacher}]);
            console.log(this.datausername.idTeacher);
            

          }
        }
      })

      this.callapi.getDataStudent(this.user.value.user).subscribe(it => {
        this.datausername2 = it
        console.log(this.datausername2);
        if (this.datausername2 == null) {
          console.log("ไม่พบยูสเซอร์นักเรียน");
        } 
        else 
        {
          if (this.user.value.user == this.datausername2.usernameStudent && this.user.value.password == this.datausername2.passwordStudent) {
            console.log("welcomeStudent");
            // this.route.navigate(['/showteacher' ,{_data:this.datausername2.idStudent}]);
          }

        }
      })

     


    }


  }

}
