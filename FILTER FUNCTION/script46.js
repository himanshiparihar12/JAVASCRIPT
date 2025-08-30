//Count employees whose tenure is more than 2 years:
const employees = [
  { name: "Kriti", joinedOn: "2022-05-01" },
  { name: "Dev", joinedOn: "2024-03-12" },
  { name: "Ayan", joinedOn: "2021-06-10" }
];



const count = employees.filter((emp) => {
    const reffdate = new Date("2025-08-21");  
    const Year = 2 * 365 * 24 * 60 * 60 * 1000; 
    const joined = new Date(emp.joinedOn);
    return (reffdate - joined) > Year;
}).length;

console.log(count);
