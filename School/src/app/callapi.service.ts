import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teacher } from '../app/models/teacher';
import { student } from '../app/models/student';
import { course } from '../app/models/course';
import { openCourse } from '../app/models/openCourse';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://localhost:5001/api/";




  constructor(public http: HttpClient) { }

  // -------------------------------------------Teacher--------------------------------------------------


  
  public getAllDataTeacher() {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetAllDataTeacher');
  }

  public getByIdTeacher(id:string) {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetById_Teacher/' + id);
  }


  public addTeacher(data) {
    return this.http.post<teacher>(CallapiService.host + 'Teacher/AddUser_Teacher', data);
  }

  public editTeacher(id: string, data) {
    return this.http.put<teacher>(CallapiService.host + 'Teacher/Edit_Teacher/' + id, data);
  }

  public deleteTeacher(id: string) {
    return this.http.delete<teacher>(CallapiService.host + 'Teacher/Delete_Teacher/' + id);
  }

  // public AddCourseToTeacher(id: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddCourseToTeacher/' + id, data);
  // }
  // public AddStudentToCourse(id: string,id2: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddStudentToCourse/'+ id+ '/' +id2 +'/',data);
  // }
  


  // -----------------------------------------Student-----------------------------------------------------------------


  public getAllDataStudent() {
    return this.http.get<student>(CallapiService.host + 'Student/GetAllData_Student');
  }

  public getByIdStudent(id: string) {
    return this.http.get<student>(CallapiService.host + 'Student/GetById_Student/' + id);
  }

  public addStudent(data) {
    return this.http.post<student>(CallapiService.host + 'Student/AddUser_Student', data);
  }

  public editStudent(id: string, data) {
    return this.http.put<student>(CallapiService.host + 'Student/Edit_Student/' + id, data);
  }

  public deleteStudent(id: string) {
    return this.http.delete<student>(CallapiService.host + 'Student/Delete_Student/' + id);
  }

  // ------------------------------------------Course-----------------------------------------------------

  public getAllDataCourse(id: string) {
    return this.http.get<course>(CallapiService.host + 'Course/GetAll_DataCourse/' + id);
  }

public getByIdCourse(id: string) {
  return this.http.get<course>(CallapiService.host + 'Course/GetById_Course/' + id);
}

public addCourse(data) {
  return this.http.post<course>(CallapiService.host + 'Course/Add_Course', data);
}

public editCourse(id: string, data) {
  return this.http.put<course>(CallapiService.host + 'Course/Edit_Course/' + id, data);
}

public deleteCourse(id: string) {
  return this.http.delete<course>(CallapiService.host + 'Course/Delete_Course/' + id);
}


public courseInStudent(id: string ,data){
  return this.http.put<course>(CallapiService.host + 'Course/CourseInStudent/' + id, data);
}



//----------------------------------------------opencourse-----------------------------------------------------

public getAllDataOpenCourse() {
  return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetAll_DataOpenCourse');
}

public getByIdOpenCourse(id: string) {
  return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetById_Opencourse/' + id);
}

public addOpenCourse(data) {
  return this.http.post<openCourse>(CallapiService.host + 'OpenCourse/AddOpencourse', data);
}

public editOpenCourse(id: string, data) {
  return this.http.put<openCourse>(CallapiService.host + 'OpenCourse/Edit_Opencourse/' + id, data);
}

public deleteOpenCourse(id: string) {
  return this.http.delete<openCourse>(CallapiService.host + 'OpenCourse/Delete_Opencourse/' + id);
}

}