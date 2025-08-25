//Filter employees whose salary is above ₹80,000.
const employees = [
  { id: 1, name: "Aditya", salary: 75000 },
  { id: 2, name: "Kiran", salary: 90000 },
  { id: 3, name: "Divya", salary: 82000 },
  { id: 4, name: "Manav", salary: 70000 }
];
const highSalaryEmployees = employees.filter(emp => emp.salary > 80000);

console.log(highSalaryEmployees);

