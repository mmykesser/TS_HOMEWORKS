interface Student {
  id: string;
  name: string;
  age: number;
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History';

type Grades = Record<Subject, number>;

interface UniversityRecord {
  students: Record<string, Student>;
  grades: Record<string, Grades>;
}

const UniversityRecord: UniversityRecord = {
  students: {
    Student1: { id: 'Student1', name: 'Andre', age: 18 },
    Student2: { id: 'Student2', name: 'John', age: 21 },
    Student3: { id: 'Student3', name: 'Maksym', age: 24 },
  },
  grades: {
    Student1: {
      Math: 85,
      Science: 93,
      Literature: 98,
      History: 81,
    },
    Student2: {
      Math: 97,
      Science: 63,
      Literature: 78,
      History: 88,
    },
    Student3: {
      Math: 80,
      Science: 79,
      Literature: 84,
      History: 96,
    },
  },
};

function getStudentGrades(
  universityRecord: UniversityRecord,
  studentId: string
): Grades | string {
  if (universityRecord.grades[studentId]) {
    return universityRecord.grades[studentId];
  }
  return `Student with ID ${studentId} not found`;
}

const student1Grades = getStudentGrades(UniversityRecord, `Student1`);

console.log(student1Grades);

function getAverageGrade(
  universityRecord: UniversityRecord,
  subject: Subject
): number | string {
  const grades: number[] = [];

  for (const studentId in UniversityRecord.grades) {
    const studentGrades = universityRecord.grades[studentId];
    if (studentGrades[subject]) {
      grades.push(studentGrades[subject]);
    }
  }
  const sum = grades.reduce((sum, grade) => sum + grade, 0);
  return `Average grade ${subject}: ${sum / grades.length}`;
}

const averageHistory = getAverageGrade(UniversityRecord, 'History');
const averageMath = getAverageGrade(UniversityRecord, 'Math');

console.log(averageHistory);
console.log(averageMath);
