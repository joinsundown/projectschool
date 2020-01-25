import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  statusop: any;


  constructor(public callapi: CallapiService) {

  }

  ngOnInit() {
    this.statusop;
  }


  gotostatus() {
    console.log(this.statusop);
  }

  addStudent(data) {
    this.callapi.addStudent(data).subscribe(it => {
    });
  }


}