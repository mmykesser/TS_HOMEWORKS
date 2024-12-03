import User from './User.js';

class Teacher extends User {
  subjects = ['Programming ', 'English', 'Chemistry', 'Physic', 'History'];

  addSubject(subject) {
    this.subjects.push(subject);
  }
}

export default Teacher;
