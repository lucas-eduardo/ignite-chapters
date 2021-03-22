interface Course {
  name: string;
  duration?: number;
  education: string;
}

class CreateCourseService {
  execute({ name, duration = 8, education }: Course) {
    console.log(name, duration, education);
  }
}

export default new CreateCourseService();