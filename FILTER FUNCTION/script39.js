const subscriptions = [
  { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
  { id: 2, user: "Rajat", expiresOn: "2025-06-30" },
  { id: 3, user: "Simran", expiresOn: "2025-05-02" },
  { id: 4, user: "Ajay", expiresOn: "2025-04-23" },
  { id: 5, user: "Rohan", expiresOn: "2025-04-23" },
  { id: 6, user: "Nayan", expiresOn: "2025-08-28" },
];
// let refdate = new Date("2025-04-23");
// let newdate = new Date("2025-05-03");
// let diff = (newdate - refdate)/(1000*60*60*24);
// console.log(diff);

const valid = subscriptions.filter((s) => {
  let refdate = new Date("2025-04-23");
  let newdate = new Date(s.expiresOn);
  let diff = (newdate - refdate) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 7;
});
console.log(valid);