// Filter students who have completed their course.
const students = [
  { id: 1, name: "Ankit", courseCompleted: true },
  { id: 2, name: "Divya", courseCompleted: false },
  { id: 3, name: "Rajesh", courseCompleted: true },
  { id: 4, name: "Kriti", courseCompleted: false }
];
const completedStudents = students.filter(student => student.courseCompleted);
console.log(completedStudents);