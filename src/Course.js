import BaseModel from './BaseModel.js';

class Course extends BaseModel {
  static id = 438;
  static isCourse(obj) {
    return obj instanceof Course;
  }
  #students = [];
  #teacher = null;
  name = null;

  constructor({ name, teacher }) {
    super();
    this.name = name;
    this.id = Course.id;
    this.#teacher = teacher;
    Course.id += 1;
  }

  addStudent(student) {
    this.#students.push(student);
  }

  removeStudent(studentId) {
    const index = this.#students.findIndex((user) => user.id === studentId);
    if (index !== -1) {
      this.students.splice(index, 1);
    } else {
      throw new Error('Error with ID student');
    }
  }

  set teacher(teacher) {
    this.#teacher = teacher;
  }

  get students() {
    return this.#students;
  }

  listStudents() {
    return this.#students;
  }
}

export default Course;
