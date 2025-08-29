//. Filter students whose registration date is in March 2025.
const students = [
  { id: 1, name: "Neha", registeredOn: "2025-03-15" },
  { id: 2, name: "Amit", registeredOn: "2025-04-01" },
  { id: 3, name: "Tanvi", registeredOn: "2025-03-28" },
  { id: 4, name: "Rohan", registeredOn: "2025-02-27" }
];

const res = students.filter((l) => l.registeredOn.slice(0, 7) === "2025-03");
console.log(res);