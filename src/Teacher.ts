import User from './User.js';
import { ifcTeacher } from './interface.js';

class Teacher extends User implements ifcTeacher {
  public subjects: string[] = ['JS', 'TS', 'PHP'];

  public addSubject(subject: string): void {
    this.subjects.push(subject);
  }
}

export default Teacher;
