// Filter doctors who have more than 5 years of experience.
const doctors = [
  { id: 1, name: "Dr. Renu", experience: 10 },
  { id: 2, name: "Dr. Sameer", experience: 3 },
  { id: 3, name: "Dr. Alok", experience: 8 },
  { id: 4, name: "Dr. Namrata", experience: 2 }
];
const doc = doctors.filter((d) => d.experience > 5);
console.log(doc);