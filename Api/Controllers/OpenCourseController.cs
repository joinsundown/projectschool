using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Api.Models;


namespace Api.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]



    public class OpenCourseController : ControllerBase
    {


        public static List<Student> DataStudent = new List<Student>
        {
            new Student { IdStudent = "0001",UsernameStudent = "ABCD" , PasswordStudent = "1111",  NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th" },
            new Student { IdStudent = "0002",UsernameStudent = "ABCE" , PasswordStudent = "2222",  NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };
        public static List<Teacher> DataTeacher = new List<Teacher>
     {
        new Teacher { IdTeacher = "001", UsernameTeacher = "teacher1", PasswordTeacher = "1111",  NameTeacher ="Nameteacher1", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th"},
        new Teacher { IdTeacher = "002", UsernameTeacher = "teacher2", PasswordTeacher = "2222", NameTeacher ="Nameteacher2", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th" }
    };
     


        public static List<OpenCourse> DataOpenCourse = new List<OpenCourse>
     {
        new OpenCourse { IdCourse = "0101", NameCourse = "course1", Teachers = DataTeacher.ToArray(),Students = DataStudent.ToArray()},
        new OpenCourse { IdCourse = "0202", NameCourse = "course2", Teachers = DataTeacher.ToArray() ,Students = DataStudent.ToArray()}
    };


        [HttpGet]
        public ActionResult<IEnumerable<OpenCourse>> GetAllDataOpenCourse()
        {
            return DataOpenCourse.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<OpenCourse> GetByIdOpenCourse(string id)
        {
            return DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        }

        [HttpPost]
        public OpenCourse AddCourse2([FromBody] OpenCourse CourseAll)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new OpenCourse
            {
                
                IdCourse = CourseAll.IdCourse,
                NameCourse = CourseAll.NameCourse,
                Teachers = DataTeacher.ToArray(),
                Students = DataStudent.ToArray()
           
            };
            DataOpenCourse.Add(item);
            return item;
        }




        [HttpPost]
        public OpenCourse AddOpenCourse([FromBody] OpenCourse OpenCoursex)
        {
            var item = new OpenCourse
            {

                IdCourse = OpenCoursex.IdCourse,
                NameCourse = OpenCoursex.NameCourse,
                Teachers = OpenCoursex.Teachers.ToArray()

            };
            DataOpenCourse.Add(item);
            return item;
        }

        [HttpPost]
        public OpenCourse AddOpenCourseTeacher2([FromBody] OpenCourse OpenCoursex)
        {
            var item = new OpenCourse
            {

                IdCourse = OpenCoursex.IdCourse,
                NameCourse = OpenCoursex.NameCourse,
                Teachers = OpenCoursex.Teachers.ToArray()

            };
            DataOpenCourse.Add(item);
            return item;
        }
        // [HttpPost]
        // public Course AddCourse([FromBody] Course Coursex)
        // {
        //     var item = new Course
        //     {

        //         IdCourse = Coursex.IdCourse,
        //         NameCourse = Coursex.NameCourse,

        //     };
        //     DataCourse.Add(item);
        //     return item;
        // }



        [HttpPut("{id}")]
        public OpenCourse EditOpenCourse(string id, [FromBody] OpenCourse OpenCoursex)
        {
            var _id = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());

            var item = new OpenCourse
            {
                IdCourse = id.ToString(),
                NameCourse = OpenCoursex.NameCourse,
            };
            DataOpenCourse.Remove(_id);
            DataOpenCourse.Add(item);
            return item;
        }


        [HttpDelete("{id}")]
        public void DeleteOpenCourse(string id)
        {
            var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataOpenCourse.Remove(data);

        }
      

        [HttpPut("{id}")]
        public OpenCourse AddTeacherInOpenCourse(string id, [FromBody] Teacher Teacher)
        {
            var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            var sss = data.Teachers.ToList();
            Console.WriteLine(data.Teachers.ToList());

            // var ss = data.Student.ToArray();
            var item = new Teacher
            {

                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = Teacher.IdTeacher,
                NameTeacher = Teacher.NameTeacher,
                StatusTeacher = Teacher.StatusTeacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            sss.Add(item);
            Console.WriteLine(sss.ToList());

            var item2 = new OpenCourse
            {
                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teachers = sss.ToArray(),
                Students = data.Students

            };

            DataOpenCourse.Remove(data);
            DataOpenCourse.Add(item2);
            //    data.Student.ToList().Add(item);
            // var len = ss.Length;
            // Array.Resize(ref ss, ss.Length + 1);
            // var len = data.Student.Length;
            // Array arr = new Array [len];
            // Console.WriteLine(arr.Length);
            // for (int i = 0; i < len; i++)
            // {

            //      Console.WriteLine(i);
            // }
            return item2;
            // var item = new Opencourse
            // {
            //     IdCourse = id.ToString(),
            //     NameCourse = data.NameCourse,
            //     Student = data.Student,
            // };
        }


         [HttpPut("{id}")]
        public OpenCourse AddStudentInOpenCourse(string id, [FromBody] Student Student)
        {
            var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            var sss = data.Students.ToList();
            Console.WriteLine(data.Students.ToList());

            // var ss = data.Student.ToArray();
            var item = new Student
            {

                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,

                IdStudent = Student.IdStudent,
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent
            };
            sss.Add(item);
            Console.WriteLine(sss.ToList());

            var item2 = new OpenCourse
            {
                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teachers = data.Teachers,
                Students = sss.ToArray()
            };

            DataOpenCourse.Remove(data);
            DataOpenCourse.Add(item2);
            //    data.Student.ToList().Add(item);
            // var len = ss.Length;
            // Array.Resize(ref ss, ss.Length + 1);
            // var len = data.Student.Length;
            // Array arr = new Array [len];
            // Console.WriteLine(arr.Length);
            // for (int i = 0; i < len; i++)
            // {

            //      Console.WriteLine(i);
            // }
            return item2;
            // var item = new Opencourse
            // {
            //     IdCourse = id.ToString(),
            //     NameCourse = data.NameCourse,
            //     Student = data.Student,
            // };
        }
    }
}


