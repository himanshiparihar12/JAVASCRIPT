// Filter employees who are currently on leave.
const employees = [
  { id: 1, name: "Ravi", onLeave: false },
  { id: 2, name: "Priya", onLeave: true },
  { id: 3, name: "Arjun", onLeave: true },
  { id: 4, name: "Neha", onLeave: false }
];
const onLeaveEmployees = employees.filter(emp => emp.onLeave);

console.log(onLeaveEmployees);