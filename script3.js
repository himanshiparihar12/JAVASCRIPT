//Filter doctors who are available today.
const doctors = [
  { id: 1, name: "Dr. Meena", availableToday: true },
  { id: 2, name: "Dr. Ali", availableToday: false },
  { id: 3, name: "Dr. Tara", availableToday: true },
  { id: 4, name: "Dr. Ronit", availableToday: false }
];
const tdoctor = doctors.filter((d) => d.availableToday === true);
console.log(tdoctor);
