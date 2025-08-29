// Filter students who opted for the "Python" course.
const students = [
  { id: 1, name: "Tanmay", course: "JavaScript" },
  { id: 2, name: "Ragini", course: "Python" },
  { id: 3, name: "Harsh", course: "Python" },
  { id: 4, name: "Mehul", course: "Java" }
];
const pythonStudents = students.filter(student => student.course === "Python");

console.log(pythonStudents);