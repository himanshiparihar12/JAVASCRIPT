//Filter instructors who are currently active.
const instructors = [
  { id: 1, name: "Ritu", active: true },
  { id: 2, name: "Adil", active: false },
  { id: 3, name: "Neha", active: true },
  { id: 4, name: "Mohit", active: false }
];
const activeInstructors = instructors.filter(instructor => instructor.active);

console.log(activeInstructors);