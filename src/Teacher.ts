import User from './User.js';

class Teacher extends User {
  subjects: string[] = ['JS', 'TS', 'PHP'];

  addSubject(subject: string) {
    this.subjects.push(subject);
  }
}

export default Teacher;
