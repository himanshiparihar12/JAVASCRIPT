// Count how many appointments are scheduled in the evening (after 6PM):
const schedule = [
  { patient: "Ram", datetime: "2025-07-10T18:30:00" },
  { patient: "Shyam", datetime: "2025-07-10T16:00:00" },
  { patient: "Meena", datetime: "2025-07-10T20:00:00" }
];

const evening = schedule.filter((count) => {
  let hour = new Date(count.datetime).getHours();
return hour >= 18;});
console.log(evening);