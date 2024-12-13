import Course from './Course.js';
import Student from './Student.js';
import BaseModel from './BaseModel.js';
import User from './User.js';

export interface ifcBaseModel {
  createdAt: number;
  validate(): boolean;
}

export interface ifcUser {
  id: number;
  name: string;
  email: string;
  changePassword(newPassword: string): void;
}

export interface ifcTeacher extends ifcUser {
  subjects: string[];
  addSubject(subject: string): void;
}

export interface ifcStudent extends ifcUser {
  courses: Course[];
  enroll(course: Course): void;
  getEnrolledCourses(): Course[];
}

export interface ifcCourse extends BaseModel {
  id: number;
  name: string;

  addStudent(student: Student): void;
  removeStudent(studentId: number): void | never;
  listStudents(): Student[];
}

export interface ifcCourseManager {
  users: User[];
  courses: Course[];

  addUser(user: User): void;
  addCourse(course: Course): void;
  findCourse(courseId: number): Course | undefined;
  assignTeacherToCourse(courseId: number, teacherId: number): void | never;
  enrollStudentToCourse(courseId: number, studentId: number): void | never;
  generateReport(): { users: string; courses: string };
}
