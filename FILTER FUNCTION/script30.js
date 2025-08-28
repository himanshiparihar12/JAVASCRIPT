//Filter students with attendance below 75%.
const students = [
  { id: 1, name: "Shreya", attendance: 80 },
  { id: 2, name: "Aman", attendance: 60 },
  { id: 3, name: "Bhavya", attendance: 70 },
  { id: 4, name: "Punit", attendance: 90 }
];
const lowAttendance = students.filter(student => student.attendance < 75);

console.log(lowAttendance);