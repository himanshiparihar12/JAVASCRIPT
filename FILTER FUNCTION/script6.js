// Filter ICU patients.
const patients = [
  { id: 1, name: "Karan", ward: "ICU" },
  { id: 2, name: "Seema", ward: "General" },
  { id: 3, name: "Nitin", ward: "ICU" },
  { id: 4, name: "Suman", ward: "Private" }
];
const wards = patients.filter((pat) => pat.ward === "ICU");
console.log(wards);