// Find which employees have completed 1 year or more from their joining date:
const employees = [
  { name: "Ravi", joinedOn: "2024-06-15" },
  { name: "Sneha", joinedOn: "2023-07-09" },
  { name: "Ayan", joinedOn: "2025-01-01" }
];

const OneYear = employees.filter(emp => {
  const joinDate = new Date(emp.joinedOn);
  const diffTime = new Date() - joinDate; // difference in milliseconds
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365); // convert ms → years
  return diffYears >= 1;
});

console.log(OneYear);