// Filter items with discount greater than 20%.
const items = [
  { id: 1, name: "Shirt", discount: 25 },
  { id: 2, name: "Jeans", discount: 15 },
  { id: 3, name: "Shoes", discount: 30 },
  { id: 4, name: "Cap", discount: 10 }
];
const highDiscountItems = items.filter(item => item.discount > 20);

console.log(highDiscountItems);