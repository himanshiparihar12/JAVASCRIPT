// Filter students who have pending assignments.
const students = [
  { id: 1, name: "Ishita", pendingAssignments: true },
  { id: 2, name: "Raghav", pendingAssignments: false },
  { id: 3, name: "Nina", pendingAssignments: true },
  { id: 4, name: "Sarthak", pendingAssignments: false }
];
const pendingStudents = students.filter(student => student.pendingAssignments);

console.log(pendingStudents);