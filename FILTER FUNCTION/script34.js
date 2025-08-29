// Filter employees with contract type "Freelancer".
const employees = [
  { id: 1, name: "Varun", contractType: "Permanent" },
  { id: 2, name: "Manasi", contractType: "Freelancer" },
  { id: 3, name: "Rishabh", contractType: "Freelancer" },
  { id: 4, name: "Neelam", contractType: "Intern" }
];
const freelancers = employees.filter(emp => emp.contractType === "Freelancer");

console.log(freelancers);