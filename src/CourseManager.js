import Teacher from './Teacher.js';
import Student from './Student.js';

class CourseManager {
  users = [];
  courses = [];

  addUser(user) {
    this.users.push(user);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  findCourse(courseId) {
    return this.courses.find((course) => course.id === courseId);
  }

  assignTeacherToCourse(courseId, teacherId) {
    const course = this.findCourse(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }

    const findTeacher = this.users.find(
      (user) => user.id === teacherId && user instanceof Teacher
    );
    if (!findTeacher) {
      throw new Error(`Teacher ${teacherId} not found`);
    }
    course.teacher = findTeacher;
  }

  enrollStudentToCourse(courseId, studentId) {
    const course = this.findCourse(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }
    const student = this.users.find(
      (user) => user.id === studentId && user instanceof Student
    );

    if (!student) {
      throw new Error(`Student ${studentId} not found`);
    }
    course.addStudent(student);
    student.enroll(studentId);
  }

  generateReport() {
    return {
      users: JSON.stringify(this.users),
      courses: JSON.stringify(this.courses),
    };
  }
}

export default CourseManager;
