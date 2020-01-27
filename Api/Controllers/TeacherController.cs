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


    public class TeacherController : ControllerBase
    {

        public static List<Teacher> DataTeacher = new List<Teacher>
     {

        new Teacher { IdTeacher = "001", UsernameTeacher = "teacher1", PasswordTeacher = "1111",  NameTeacher ="Nameteacher1", Statusteacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th" },
        new Teacher { IdTeacher = "002", UsernameTeacher = "teacher2", PasswordTeacher = "2222", NameTeacher ="Nameteacher2", Statusteacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th" }

    };



        [HttpGet]
        public ActionResult<IEnumerable<Teacher>> GetAllDataTeacher()
        {
            return DataTeacher.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult <Teacher> GetByIdTeacher(string id)
        {
            return DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
        }

            [HttpGet("{data}")]
        public ActionResult <Teacher> GetBydatateacherBydata(string data)
        {
            return DataTeacher.FirstOrDefault(it => it.UsernameTeacher == data.ToString());
        }


        [HttpPost]
        public Teacher AddUserTeacher([FromBody] Teacher Teacher)
        {

            var item = new Teacher
            {

                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = Teacher.IdTeacher,
                NameTeacher = Teacher.NameTeacher,
                Statusteacher = Teacher.Statusteacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            DataTeacher.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public Teacher EditTeacher(string id, [FromBody] Teacher Teacher)
        {

            var _id = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());

            var item = new Teacher
            {

                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = id.ToString(),
                NameTeacher = Teacher.NameTeacher,
                Statusteacher = Teacher.Statusteacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            DataTeacher.Remove(_id);
            DataTeacher.Add(item);
            return item;
        }


        [HttpDelete("{id}")]
        public void DeleteTeacher(string id)
        {
            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            DataTeacher.Remove(data);

        }


    }
}


