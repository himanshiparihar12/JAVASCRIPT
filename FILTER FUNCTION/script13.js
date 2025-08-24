// Filter employees with pending performance reviews.
const employees = [
  { id: 1, name: "Rahul", reviewPending: true },
  { id: 2, name: "Sneha", reviewPending: false },
  { id: 3, name: "Imran", reviewPending: true },
  { id: 4, name: "Ritu", reviewPending: false }
];
const pendingReviews = employees.filter(emp => emp.reviewPending);
console.log(pendingReviews);