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

    public class StudentController : ControllerBase
    {


        public static List<Student> DataStudent = new List<Student>
        {

            new Student { IdStudent = "001",UsernameStudent = "ABCD" , PasswordStudent = "1111",  NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th" },
            new Student { IdStudent = "002",UsernameStudent = "ABCE" , PasswordStudent = "2222",  NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };



        [HttpGet]
        public ActionResult<IEnumerable<Student>> GetAllDataStudent()
        {
            return DataStudent.ToList();
        }

        
            [HttpGet("{data}")]
        public ActionResult <Student> GetBydatastudentBydata(string data)
        {
            return DataStudent.FirstOrDefault(it => it.UsernameStudent == data.ToString());
        }


        [HttpGet("{id}")]
        public ActionResult<Student> GetByIdStudent(string id)
        {
            return DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
        }


        [HttpPost]
        public Student AddUserStudent([FromBody] Student Student)
        {
            // var _id = Guid.NewGuid().ToString();
            var item = new Student
            {
                // Id_Teacher = _id.ToString(),
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,

                IdStudent = Student.IdStudent,
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent,

            };
            DataStudent.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public Student EditStudent(string id, [FromBody] Student Student)
        {
            var _id = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());

            var item = new Student
            {
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,


                IdStudent = id.ToString(),
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent,

            };
            DataStudent.Remove(_id);
            DataStudent.Add(item);

            return item;
        }


        [HttpDelete("{id}")]
        public void DeleteStudent(string id)
        {
            var data = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
            DataStudent.Remove(data);

        }

    }
}