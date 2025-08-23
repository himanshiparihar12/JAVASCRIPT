//Filter patients with pending bills.
const patients = [
  { id: 1, name: "Aarti", pendingBill: true },
  { id: 2, name: "Rakesh", pendingBill: false },
  { id: 3, name: "Deepak", pendingBill: true },
  { id: 4, name: "Kavita", pendingBill: false }
];
const pendingBillPatients = patients.filter(patient => patient.pendingBill);
console.log(pendingBillPatients);
