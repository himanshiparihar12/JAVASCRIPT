//Filter ambulance drivers who are on duty.
const drivers = [
  { id: 1, name: "Suraj", onDuty: true },
  { id: 2, name: "Harish", onDuty: false },
  { id: 3, name: "Neeraj", onDuty: true },
  { id: 4, name: "Aakash", onDuty: false }
];

const onDutyDrivers = drivers.filter(driver => driver.onDuty);

console.log(onDutyDrivers);