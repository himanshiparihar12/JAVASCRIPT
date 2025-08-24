// Filter employees who joined in the current financial year.
const employees = [
  { id: 1, name: "Meera", joiningYear: 2023 },
  { id: 2, name: "Aakash", joiningYear: 2022 },
  { id: 3, name: "Suman", joiningYear: 2023 },
  { id: 4, name: "Nikhil", joiningYear: 2021 }
];

const year = employees.filter((emp) => emp.joiningYear === 2023);
console.log(year);