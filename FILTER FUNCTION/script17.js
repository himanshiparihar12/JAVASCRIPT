//Filter doctors who specialize in cardiology.
const doctors = [
  { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
  { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
  { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
  { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
];
const cardiologists = doctors.filter(doc => doc.specialty === "Cardiology");
console.log(cardiologists);