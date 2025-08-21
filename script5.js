// Filter hospital staff who are nurses.
const staff = [
  { id: 1, name: "Pooja", role: "Nurse" },
  { id: 2, name: "Raj", role: "Doctor" },
  { id: 3, name: "Lata", role: "Nurse" },
  { id: 4, name: "Amit", role: "Receptionist" }
];
const nur = staff.filter((staffs) => staffs.role === "Nurse");
console.log(nur);