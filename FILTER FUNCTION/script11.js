//Filter medicines that are out of stock.
const medicines = [
  { id: 1, name: "Paracetamol", inStock: false },
  { id: 2, name: "Amoxicillin", inStock: true },
  { id: 3, name: "Ibuprofen", inStock: false },
  { id: 4, name: "Metformin", inStock: true }
];

const outOfStockMedicines = medicines.filter((med) => med.inStock===false);
console.log(outOfStockMedicines);