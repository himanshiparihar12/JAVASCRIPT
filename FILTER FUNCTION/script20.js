// Filter doctors with more than 1000 consultations.
const doctors = [
  { id: 1, name: "Dr. Arya", consultations: 1200 },
  { id: 2, name: "Dr. Vikas", consultations: 850 },
  { id: 3, name: "Dr. Sneha", consultations: 1300 },
  { id: 4, name: "Dr. Raj", consultations: 700 }
];
const experiencedDoctors = doctors.filter(doc => doc.consultations > 1000);

console.log(experiencedDoctors);