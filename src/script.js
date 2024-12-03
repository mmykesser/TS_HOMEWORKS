import Student from './Student.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import CourseManager from './CourseManager.js';

const student0 = new Student({
  name: 'Alex',
  email: 'alex@gmail.com',
});

const student1 = new Student({
  name: 'Andrzej',
  email: 'andrrzej@gmail.com',
});

const t0 = new Teacher({
  name: 'Bob',
  email: 'bob@gmail.com',
});

const t1 = new Teacher({
  name: 'Maximilian',
  email: 'maximilian@gmail.com',
});

student0.changePassword('andrr543zej');
student1.changePassword('cafcacs5151acs');

const baseCourse = new Course({
  name: 'Front Base Course',
  t0,
});

const proCourse = new Course({
  name: 'Front Base Pro',
  t1,
});

const system = new CourseManager();

system.addCourse(baseCourse);
system.addCourse(proCourse);

system.addUser(t0);
system.addUser(t1);
system.addUser(student0);
system.addUser(student1);

console.log(system);

system.assignTeacherToCourse(438, 3);
system.assignTeacherToCourse(439, 2);

system.enrollStudentToCourse(438, 1);
system.enrollStudentToCourse(438, 0);
system.enrollStudentToCourse(439, 0);
