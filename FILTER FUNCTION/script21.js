// Filter doctors located in "Kolkata".
const doctors = [
  { id: 1, name: "Dr. Mehul", city: "Mumbai" },
  { id: 2, name: "Dr. Nandita", city: "Kolkata" },
  { id: 3, name: "Dr. Dev", city: "Kolkata" },
  { id: 4, name: "Dr. Anu", city: "Delhi" }
];
const kolkataDoctors = doctors.filter(doc => doc.city === "Kolkata");

console.log(kolkataDoctors);