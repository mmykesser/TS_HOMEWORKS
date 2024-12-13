import BaseModel from './BaseModel.js';
import Teacher from './Teacher.js';
import Student from './Student.js';
import { ifcCourse } from './interface.js';

class Course extends BaseModel implements ifcCourse {
  static id: number = 20;

  private _students: Student[] = [];
  private _teacher: Teacher | null = null;
  id: number;

  constructor(
    public name: string,
    teacher: Teacher
  ) {
    super();
    this.name = name;
    this._teacher = teacher;
    this.id = Course.id;
    Course.id += 1;
  }

  public addStudent(student: Student): void {
    if (!this._students.some((s: Student): boolean => s.id === student.id)) {
      this._students.push(student);
    }
  }

  public removeStudent(studentId: number): void | never {
    const index: number = this._students.findIndex(
      (user: Student): boolean => user.id === studentId
    );
    if (index !== -1) {
      this._students.splice(index, 1);
    } else {
      throw new Error('Error with ID student');
    }
  }

  public get teacher(): Teacher | null {
    return this._teacher;
  }

  public set teacher(teacher: Teacher | null) {
    this._teacher = teacher;
  }

  public listStudents(): Student[] {
    return [...this._students];
  }
}

export default Course;
