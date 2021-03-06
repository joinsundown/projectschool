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


    public class CourseController : ControllerBase
    {

        public static List<Course> DataCourse = new List<Course>
     {
        new Course { IdCourse = "0101", NameCourse = "course1" },
        new Course { IdCourse = "0202", NameCourse = "course2" }
    };
        //     public static List<Course> DataCourse = new List<Course>
        //  {

        //     new Course { IdCourse = "1001", NameCourse = "วิชาภาษาไทย" },
        //     new Course { IdCourse = "2002", NameCourse = "วิชาภาษาอะไร" }


        // };

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetAllDataCourse()
        {
            return DataCourse.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<Course> GetByIdCourse(string id)
        {
            return DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
        }


        [HttpPost]
        public Course AddCourse([FromBody] Course CourseAll)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new Course
            {

                IdCourse = CourseAll.IdCourse,
                NameCourse = CourseAll.NameCourse,
                

            };
            DataCourse.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public Course EditCourse(string id, [FromBody] Course CourseAll)
        {

            var _id = DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());

            var item = new Course
            {
                IdCourse = id.ToString(),
                NameCourse = CourseAll.NameCourse,

            };
            DataCourse.Remove(_id);
            DataCourse.Add(item);

            return item;
        }

        [HttpDelete("{id}")]
        public void DeleteCourse(string id)
        {
            var data = DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataCourse.Remove(data);

        }


    }
}