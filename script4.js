// Filter patients whose age is more than 60.
const patients = [
  { id: 1, name: "Dinesh", age: 65 },
  { id: 2, name: "Sunita", age: 45 },
  { id: 3, name: "Mahesh", age: 72 },
  { id: 4, name: "Komal", age: 58 }
];
const pat = patients.filter ((p) => p.age > 60);
console.log(pat);