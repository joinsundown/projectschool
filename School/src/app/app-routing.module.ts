<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'showteacher',
    loadChildren: () => import('./showteacher/showteacher.module').then( m => m.ShowteacherPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'showcourse',
    loadChildren: () => import('./showcourse/showcourse.module').then( m => m.ShowcoursePageModule)
   
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'showstudent',
    loadChildren: () => import('./showstudent/showstudent.module').then( m => m.ShowstudentPageModule)
  },  {
    path: 'showopencourse',
    loadChildren: () => import('./showopencourse/showopencourse.module').then( m => m.ShowopencoursePageModule)
  },
  {
    path: 'showdetailopencourse',
    loadChildren: () => import('./showdetailopencourse/showdetailopencourse.module').then( m => m.ShowdetailopencoursePageModule)
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'showteacher',
    loadChildren: () => import('./showteacher/showteacher.module').then( m => m.ShowteacherPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'showcourse',
    loadChildren: () => import('./showcourse/showcourse.module').then( m => m.ShowcoursePageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'showstudent',
    loadChildren: () => import('./showstudent/showstudent.module').then( m => m.ShowstudentPageModule)
>>>>>>> b54ca3d3403142cbf35e5d0795f17ee9333ce24b
  },
  {
    path: 'updateteacher',
    loadChildren: () => import('./updateteacher/updateteacher.module').then( m => m.UpdateteacherPageModule)
  },
  {
    path: 'updatestudent',
    loadChildren: () => import('./updatestudent/updatestudent.module').then( m => m.UpdatestudentPageModule)
  },
  {
    path: 'updatecourse',
    loadChildren: () => import('./updatecourse/updatecourse.module').then( m => m.UpdatecoursePageModule)
  },

];

<<<<<<< HEAD

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> b54ca3d3403142cbf35e5d0795f17ee9333ce24b
