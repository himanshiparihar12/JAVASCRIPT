// Filter doctors who have a rating above 4.5.
const doctors = [
  { id: 1, name: "Dr. Sara", rating: 4.8 },
  { id: 2, name: "Dr. Rohit", rating: 4.2 },
  { id: 3, name: "Dr. Isha", rating: 4.9 },
  { id: 4, name: "Dr. Vinay", rating: 4.0 }
];
const topRatedDoctors = doctors.filter(doc => doc.rating > 4.5);
console.log(topRatedDoctors);