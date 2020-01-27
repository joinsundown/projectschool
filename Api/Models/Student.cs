namespace Api.Models
{



    public class Student
    {
        public string IdStudent { get; set; }
        public string UsernameStudent { get; set; }
        public string PasswordStudent { get; set; }
        public string NameStudent { get; set; }
        public string EmailStudent { get; set; }
<<<<<<< HEAD
        public string Statusstudent { get; set; }
=======
        public string StatusStudent { get; set; }
>>>>>>> 632ab6aad4b03880d767a6d3b9d19330568bd53a


        public Course[] CourseS { get; set; }


    }
}