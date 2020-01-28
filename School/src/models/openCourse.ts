import { teacher } from './teacher';
import { student } from './student';

export class openCourse{

    idCourse: string;
    nameCourse: string;
    datateacher : teacher[] = [];
    datastudent : student[] = [];

}