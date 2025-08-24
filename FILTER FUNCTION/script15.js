// Filter employees with designation as "Software Engineer".
const employees = [
  { id: 1, name: "Tanvi", designation: "Software Engineer" },
  { id: 2, name: "Rakesh", designation: "HR Manager" },
  { id: 3, name: "Leena", designation: "Software Engineer" },
  { id: 4, name: "Abhishek", designation: "QA Analyst" }
];
const softwareEngineers = employees.filter(emp => emp.designation === "Software Engineer");
console.log(softwareEngineers);