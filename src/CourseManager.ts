import Teacher from './Teacher.js';
import Student from './Student.js';
import User from './User.js';
import Course from './Course.js';
import { ifcCourseManager } from './interface.js';

class CourseManager implements ifcCourseManager {
  public users: User[] = [];
  public courses: Course[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  findCourse(courseId: number): Course | undefined {
    return this.courses.find(
      (course: Course): boolean => course.id === courseId
    );
  }

  assignTeacherToCourse(courseId: number, teacherId: number): void | never {
    const course: Course | undefined = this.findCourse(courseId);
    const teacher: Teacher | undefined = this.users.find(
      (user: User): user is Teacher =>
        user.id === teacherId && user instanceof Teacher
    );

    if (!course) throw new Error(`Course ${courseId} not found`);
    if (!teacher) throw new Error(`Teacher ${teacherId} not found`);

    course.teacher = teacher;
  }

  enrollStudentToCourse(courseId: number, studentId: number): void | never {
    const course: Course | undefined = this.findCourse(courseId);
    if (!course) {
      throw new Error(`Course ${courseId} not found`);
    }

    const student: Student | undefined = this.users.find(
      (user): user is Student =>
        user.id === studentId && user instanceof Student
    );

    if (!student) {
      throw new Error(`Student ${studentId} not found`);
    }

    course.addStudent(student);
    student.courses.push(course);
  }

  generateReport(): { users: string; courses: string } {
    const usersReport: string = this.generateUsersReport();
    const coursesReport: string = this.generateCoursesReport();

    return {
      users: usersReport,
      courses: coursesReport,
    };
  }

  private generateUsersReport(): string {
    return this.users
      .map((user: User) => {
        if (user instanceof Teacher) {
          return `Teacher: ${user.name}, Email: ${user.email}, Subjects: ${user.subjects.join(', ')}`;
        }
        if (user instanceof Student) {
          return `Student: ${user.name}, Email: ${user.email}`;
        }
      })
      .join(' ');
  }

  private generateCoursesReport(): string {
    return this.courses
      .map((course: Course): string => {
        const teacher: string = course.teacher
          ? `Teacher: ${course.teacher.name}, Email: ${course.teacher.email}`
          : 'No teacher assigned';
        const students: string = course
          .listStudents()
          .map((s: Student) => s.name)
          .join(', ');

        return `Course: ${course.name}, ${teacher}, Students: ${students}`;
      })
      .join('\n');
  }
}

export default CourseManager;
