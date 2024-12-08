import BaseModel from './BaseModel.js';
import Teacher from './Teacher.js';
import Student from './Student.js';

class Course extends BaseModel {
  static id: number = 20;

  #students: Student[] = [];
  #teacher: Teacher | null = null;
  name: string | null = null;
  id: number;

  constructor(name: string, teacher: Teacher) {
    super();
    this.name = name;
    this.id = Course.id;
    this.#teacher = teacher;
    Course.id += 1;
  }

  addStudent(student: Student) {
    if (!this.#students.some((s) => s.id === student.id)) {
      this.#students.push(student);
      student.enroll(this);
    }
  }

  removeStudent(studentId: number) {
    const index = this.#students.findIndex((user) => user.id === studentId);
    if (index !== -1) {
      this.#students.splice(index, 1);
    } else {
      throw new Error('Error with ID student');
    }
  }

  set teacher(teacher: Teacher) {
    this.#teacher = teacher;
  }

  get teacher(): Teacher | null {
    return this.#teacher;
  }

  get students(): Student[] {
    return this.#students;
  }

  listStudents(): Student[] {
    return this.students;
  }
}

export default Course;
