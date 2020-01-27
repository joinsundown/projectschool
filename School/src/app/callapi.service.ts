import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teacher } from '../models/teacher';
import { student } from '../models/student';
import { course } from '../models/course';
import { openCourse } from '../models/openCourse';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://localhost:5001/api/";

  alluser : any;
  

  constructor(public http: HttpClient) { }

  // -------------------------------------------Teacher--------------------------------------------------


  
  public getAllData_Teacher() {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetAllDataTeacher');
  }

  public getById_Teacher(id:string) {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetById_Teacher/' + id);
  }
  public getBydata_Teacher(data:string) {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetBydatateacherBydata/' + data);
  }

  public add_Teacher(data) {
    return this.http.post<teacher>(CallapiService.host + 'Teacher/AddUser_Teacher', data);
  }

  public edit_Teacher(id: string, data) {
    return this.http.put<teacher>(CallapiService.host + 'Teacher/Edit_Teacher/' + id, data);
  }

  public delete_Teacher(id: string) {
    return this.http.delete<teacher>(CallapiService.host + 'Teacher/Delete_Teacher/' + id);
  }

  // public AddCourseToTeacher(id: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddCourseToTeacher/' + id, data);
  // }
  // public AddStudentToCourse(id: string,id2: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddStudentToCourse/'+ id+ '/' +id2 +'/',data);
  // }
  
  

  // -----------------------------------------Student-----------------------------------------------------------------


  public getAllData_Student() {
    return this.http.get<student>(CallapiService.host + 'Student/GetAllData_Student');
  }

  public getById_Student(id: string) {
    return this.http.get<student>(CallapiService.host + 'Student/GetById_Student/' + id);
  }
  public getBydata_Student(data:string) {
    return this.http.get<student>(CallapiService.host + 'Student/GetBydatastudentBydata/' + data);
  }

  public add_Student(data) {
    return this.http.post<student>(CallapiService.host + 'Student/AddUser_Student', data);
  }

  public edit_Student(id: string, data) {
    return this.http.put<student>(CallapiService.host + 'Student/Edit_Student/' + id, data);
  }

  public delete_Student(id: string) {
    return this.http.delete<student>(CallapiService.host + 'Student/Delete_Student/' + id);
  }

  // ------------------------------------------Course-----------------------------------------------------

  public getAll_DataCourse(id: string) {
    return this.http.get<course>(CallapiService.host + 'Course/GetAll_DataCourse/' + id);
  }

public getById_Course(id: string) {
  return this.http.get<course>(CallapiService.host + 'Course/GetById_Course/' + id);
}

public add_Course(data) {
  return this.http.post<course>(CallapiService.host + 'Course/Add_Course', data);
}

public edit_Course(id: string, data) {
  return this.http.put<course>(CallapiService.host + 'Course/Edit_Course/' + id, data);
}

public delete_Course(id: string) {
  return this.http.delete<course>(CallapiService.host + 'Course/Delete_Course/' + id);
}


public courseInStudent(id: string ,data){
  return this.http.put<course>(CallapiService.host + 'Course/CourseInStudent/' + id, data);
}



//----------------------------------------------opencourse-----------------------------------------------------

public getAllData_OpenCourse() {
  return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetAll_DataOpenCourse');
}

public getById_OpenCourse(id: string) {
  return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetById_Opencourse/' + id);
}

public add_OpenCourse(data) {
  return this.http.post<openCourse>(CallapiService.host + 'OpenCourse/AddOpencourse', data);
}

public edit_OpenCourse(id: string, data) {
  return this.http.put<openCourse>(CallapiService.host + 'OpenCourse/Edit_Opencourse/' + id, data);
}

public delete_OpenCourse(id: string) {
  return this.http.delete<openCourse>(CallapiService.host + 'OpenCourse/Delete_Opencourse/' + id);
}

}