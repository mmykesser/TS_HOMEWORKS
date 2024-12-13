import User from './User.js';
import Course from './Course.js';
import { ifcStudent } from './interface.js';

class Student extends User implements ifcStudent {
  public courses: Course[] = [];

  public enroll(course: Course): void | never {
    if (this.validateEnroll(course)) {
      throw new Error(`Course already enrolled`);
    }
    this.courses.push(course);
  }

  private validateEnroll(course: Course): boolean {
    return this.courses.includes(course);
  }

  public getEnrolledCourses(): Course[] {
    return this.courses;
  }
}

export default Student;
