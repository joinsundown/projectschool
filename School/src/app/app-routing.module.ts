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
  },  {
    path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
<<<<<<< HEAD
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'showcourse',
    loadChildren: () => import('./showcourse/showcourse.module').then( m => m.ShowcoursePageModule)
=======
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'showstudent',
    loadChildren: () => import('./showstudent/showstudent.module').then( m => m.ShowstudentPageModule)
>>>>>>> 632ab6aad4b03880d767a6d3b9d19330568bd53a
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
