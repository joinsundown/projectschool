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
    

        public static List<OpenCourse> DataOpenCourse  = new List<OpenCourse>
     {

        new OpenCourse { IdCourse = "0101", NameCourse = "course1" },

        new OpenCourse { IdCourse = "0202", NameCourse = "course2" }


    };

  

        [HttpGet]
        public ActionResult<IEnumerable<OpenCourse>> GetAll_DataOpenCourse()
        {
            return DataOpenCourse.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<OpenCourse> GetById_OpenCourse(string id)
        {
            return DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        }

        

        [HttpPost]
        public OpenCourse AddOpenCourse([FromBody] OpenCourse OpenCoursex)
        {
            var item = new OpenCourse
            {

                IdCourse = OpenCoursex.IdCourse,
                NameCourse = OpenCoursex.NameCourse,

            };
            DataOpenCourse.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public OpenCourse Edit_OpenCourse(string id, [FromBody] OpenCourse OpenCoursex)
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
        public void Delete_OpenCourse(string id)
        {
            var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataOpenCourse.Remove(data);

        }




        // [HttpPut("{id}")]
        // public OpenCourse AddStudentInOpenCourse(string id, [FromBody] UserStudent Studentx)
        // {
        //     var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        //      var sss = data.Student.ToList();
        //      Console.WriteLine(data.Student.ToList());
            
        //     // var ss = data.Student.ToArray();
        //     var item = new UserStudent
        //     {
        //         IdStudent = Studentx.IdStudent,
        //         UsernameStudent = Studentx.UsernameStudent,
        //         PasswordStudent = Studentx.PasswordStudent,
        //         NameStudent = Studentx.NameStudent,
        //         StatusStudent = Studentx.StatusStudent,
        //         EmailStudent = Studentx.EmailStudent,
             
        //     };
        //     sss.Add(item);
        //     Console.WriteLine(sss.ToList());

        //     var item2 = new Opencourse
        //     {
        //         IdCourse = id.ToString(),
        //         NameCourse = data.NameCourse,
        //         Teacher = data.Teacher,
        //         Student = sss.ToArray()
        //     };

        //     DataOpenCourse.Remove(data);
        //     DataOpenCourse.Add(item2);
        // //    data.Student.ToList().Add(item);
        // // var len = ss.Length;
        // // Array.Resize(ref ss, ss.Length + 1);
        //     // var len = data.Student.Length;
        //     // Array arr = new Array [len];
        //     // Console.WriteLine(arr.Length);
        //     // for (int i = 0; i < len; i++)
        //     // {
               
        //     //      Console.WriteLine(i);
        //     // }
        //     return item2;
        //     // var item = new Opencourse
        //     // {
        //     //     IdCourse = id.ToString(),
        //     //     NameCourse = data.NameCourse,
        //     //     Student = data.Student,
        //     // };
        // }

    }
}


