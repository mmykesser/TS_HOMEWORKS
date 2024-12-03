import User from './User.js';

class Student extends User {
  courses = [];

  enroll(courses) {
    this.courses.push(courses);
  }
}

export default Student;
