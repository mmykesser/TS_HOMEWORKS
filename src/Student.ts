import User from './User.js';
import Course from './Course';

class Student extends User {
  courses: Course[] = [];

  enroll(course: Course) {
    this.courses.push(course);
  }
}

export default Student;
