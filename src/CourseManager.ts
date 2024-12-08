import Teacher from './Teacher.js';
import Student from './Student.js';
import User from './User.js';
import Course from './Course.js';

class CourseManager {
  users: User[] = [];
  courses: Course[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  findCourse(courseId: number): Course | undefined {
    return this.courses.find((course) => course.id === courseId);
  }

  assignTeacherToCourse(courseId: number, teacherId: number) {
    const course = this.findCourse(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }

    const findTeacher = this.users.find(
      (user): user is Teacher =>
        user.id === teacherId && user instanceof Teacher
    );

    if (!findTeacher) {
      throw new Error(`Teacher ${teacherId} not found`);
    }

    course.teacher = findTeacher;
  }

  enrollStudentToCourse(courseId: number, studentId: number) {
    const course = this.findCourse(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }

    const student = this.users.find(
      (user): user is Student =>
        user.id === studentId && user instanceof Student
    );

    if (!student) {
      throw new Error(`Student ${studentId} not found`);
    }

    course.addStudent(student);
  }

  generateReport() {
    return {
      users: JSON.stringify(this.users),
      courses: JSON.stringify(this.courses),
    };
  }
}

export default CourseManager;
