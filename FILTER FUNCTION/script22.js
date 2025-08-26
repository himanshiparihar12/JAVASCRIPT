// Filter products priced below ₹500.
const products = [
  { id: 1, name: "Pen", price: 50 },
  { id: 2, name: "Notebook", price: 250 },
  { id: 3, name: "Power Bank", price: 999 },
  { id: 4, name: "USB Cable", price: 300 }
];
const affordableProducts = products.filter(product => product.price < 500);

console.log(affordableProducts);
