namespace Api.Models
{

    public class OpenCourse
    {
        public string IdCourse { get; set; }
        public string NameCourse { get; set; }

        public Teacher[] Teachers { get; set; }

        public Student[] Students { get; set; }


    }
}