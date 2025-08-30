// /Filter employees who joined within the last 30 days from "2025-07-10":
const employees = [
  { name: "Amit", joinedOn: "2025-07-01" },
  { name: "Kajal", joinedOn: "2025-06-15" },
  { name: "Raj", joinedOn: "2025-06-05" }
]
const today = new Date("2025-07-10");
const cutoff = new Date(today);
cutoff.setDate(cutoff.getDate() - 30);  // 30 din pichhe ki date

const recentEmployees = employees.filter(emp => {
  const joinedDate = new Date(emp.joinedOn);
  return joinedDate >= cutoff && joinedDate <= today;
});

console.log(recentEmployees);