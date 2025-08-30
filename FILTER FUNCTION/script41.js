// Filter employees Names who joined the company after 1st July 2025.
const employees = [
  { id: 1, name: "Isha", joinedOn: "2025-12-31" },
  { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
  { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
  { id: 4, name: "Dev", joinedOn: "2025-02-01" }
];
 
const filteredEmployees = employees.filter(emp => new Date(emp.joinedOn) > new Date("2025-07-01")); // sirf July 1 ke baad wale // sirf names nikalne ke liye

console.log(filteredEmployees);