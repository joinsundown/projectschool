namespace Api.Models
{



    public class Student
    {
        public string IdStudent { get; set; }
        public string UsernameStudent { get; set; }
        public string PasswordStudent { get; set; }
        public string NameStudent { get; set; }
        public string EmailStudent { get; set; }
        public string Status { get; set; }


        public Course[] CourseS { get; set; }


    }
}