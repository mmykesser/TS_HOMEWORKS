import User from './User.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import Student from './Student.js';
import CourseManager from './CourseManager.js';

const u1: User = new User('Alex', 'Alex311@gmil.com');
const u2: User = new User('Bob', 'Bob3@gmail.com');

const info = { u1: u1.info, u2: u2.info };
console.log(`User Info: ${info}`);

const teacher1: Teacher = new Teacher('John', 'john@gmil.com');
const teacher2: Teacher = new Teacher('Matthew', 'matthew @gmail.com');
teacher1.addSubject('Mathematics');
teacher2.addSubject('Programming');

const course = new Course('Introduction to programming ', teacher2);
const student1 = new Student('Alice', 'alice@example.com');
const student2 = new Student('Jack', 'jack@example.com');
course.addStudent(student1);
course.addStudent(student2);

console.log(course.listStudents());

const course2 = new Course('JS course', teacher1);

const system = new CourseManager();

system.addCourse(course);
system.addCourse(course2);

system.addUser(teacher1);
system.addUser(teacher2);
system.addUser(student2);
system.addUser(student1);

console.log(system);

system.assignTeacherToCourse(20, 2);
system.assignTeacherToCourse(21, 3);

system.enrollStudentToCourse(20, 4);
system.enrollStudentToCourse(20, 5);
system.enrollStudentToCourse(21, 5);

console.log(system.generateReport());
