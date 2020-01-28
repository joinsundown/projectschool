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

  alluser: any;


  constructor(public http: HttpClient) { }

  // -------------------------------------------Teacher--------------------------------------------------



  public getAllDataTeacher() {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetAllDataTeacher');
  }

  public getByIdTeacher(id: string) {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetByIdTeacher/' + id);
  }
  public getDataTeacher(data: string) {
    return this.http.get<teacher>(CallapiService.host + 'Teacher/GetBydatateacherBydata/' + data);
  }
  public addTeacher(data) {
    return this.http.post<teacher>(CallapiService.host + 'Teacher/AddUserTeacher', data);
  }

  public editTeacher(id: string, data) {
    return this.http.put<teacher>(CallapiService.host + 'Teacher/EditTeacher/' + id, data);
  }

  public deleteTeacher(id: string) {
    return this.http.delete<teacher>(CallapiService.host + 'Teacher/DeleteTeacher/' + id);
  }

  // public AddCourseToTeacher(id: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddCourseToTeacher/' + id, data);
  // }
  // public AddStudentToCourse(id: string,id2: string, data) {
  //   return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddStudentToCourse/'+ id+ '/' +id2 +'/',data);
  // }



  // -----------------------------------------Student-----------------------------------------------------------------


  public getAllDataStudent() {
    return this.http.get<student>(CallapiService.host + 'Student/GetAllDataStudent');
  }

  public getByIdStudent(id: string) {
    return this.http.get<student>(CallapiService.host + 'Student/GetByIdStudent/' + id);
  }
  public getDataStudent(data: string) {
    return this.http.get<student>(CallapiService.host + 'Student/GetBydatastudentBydata/' + data);
  }

  public addStudent(data) {
    return this.http.post<student>(CallapiService.host + 'Student/AddUserStudent', data);
  }

  public editStudent(id: string, data) {
    return this.http.put<student>(CallapiService.host + 'Student/EditStudent/' + id, data);
  }

  public deleteStudent(id: string) {
    return this.http.delete<student>(CallapiService.host + 'Student/DeleteStudent/' + id);
  }

  // ------------------------------------------Course-----------------------------------------------------

  public getAllDataCourse() {
    return this.http.get<course>(CallapiService.host + 'Course/GetAllDataCourse');
  }

  public getByIdCourse(id: string) {
    return this.http.get<course>(CallapiService.host + 'Course/GetByIdCourse/' + id);
  }

  public addCourse(data) {
    return this.http.post<course>(CallapiService.host + 'Course/AddCourse', data);
  }

  public editCourse(id: string, data) {
    return this.http.put<course>(CallapiService.host + 'Course/EditCourse/' + id, data);
  }

  public deleteCourse(id: string) {
    return this.http.delete<course>(CallapiService.host + 'Course/DeleteCourse/' + id);
  }


  public courseInStudent(id: string, data) {
    return this.http.put<course>(CallapiService.host + 'Course/CourseInStudent/' + id, data);
  }



  //----------------------------------------------opencourse-----------------------------------------------------

  public getAllDataOpenCourse() {
    return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetAllDataOpenCourse');
  }

  public getByIdOpenCourse(id: string) {
    return this.http.get<openCourse>(CallapiService.host + 'OpenCourse/GetByIdOpenCourse/' + id);
  }

  public addCourse2(data) {
    return this.http.post<openCourse>(CallapiService.host + 'OpenCourse/AddCourse2', data);
  }


  public addOpenCourse(data) {
    return this.http.post<openCourse>(CallapiService.host + 'OpenCourse/AddOpenCourse', data);
  }

  public editOpenCourse(id: string, data) {
    return this.http.put<openCourse>(CallapiService.host + 'OpenCourse/EditOpenCourse/' + id, data);
  }

  public deleteOpenCourse(id: string) {
    return this.http.delete<openCourse>(CallapiService.host + 'OpenCourse/DeleteOpenCourse/' + id);
  }

  public AddTeacherInOpenCourse(id: string, data) {
    return this.http.put<openCourse>(CallapiService.host + 'OpenCourse/AddTeacherInOpenCourse/' + id, data);
  }


}