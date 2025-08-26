// Filter products that belong to the "Electronics" category.
const catalog = [
  { id: 1, name: "TV", category: "Electronics" },
  { id: 2, name: "Sofa", category: "Furniture" },
  { id: 3, name: "Washing Machine", category: "Electronics" },
  { id: 4, name: "Table", category: "Furniture" }
];
const electronicsProducts = catalog.filter(product => product.category === "Electronics");
console.log(electronicsProducts);