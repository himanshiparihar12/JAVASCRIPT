// Filter items that are eligible for free shipping.
const items = [
  { id: 1, name: "Books", freeShipping: true },
  { id: 2, name: "Stationery", freeShipping: false },
  { id: 3, name: "Smartphone", freeShipping: true },
  { id: 4, name: "Speaker", freeShipping: false }
];
const freeShippingItems = items.filter(item => item.freeShipping);
console.log(freeShippingItems);