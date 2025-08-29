const events = [
  {
    id: 1,
    eventname: "Workshop",
    date: "2025-04-26",
    gender: "Female",
    name: "Kajal",
  }, // Saturday
  {
    id: 2,
    eventname: "Hackathon",
    date: "2025-04-27",
    gender: "Female",
    name: "Payal",
  }, // Sunday
  {
    id: 3, eventname: "Seminar", date: "2025-04-25", gender: "Female",name: "Rashmika",
  }, // Friday
  {
    id: 4,eventname: "Webinar",date: "2025-04-28",gender: "Female",name: "Kaira",
  }, // Monday
];

// let refdate = new Date().getDay();
// console.log(refdate);

// sun mon tue wed thrus fri sat
// 0   1   2    3   4    5    6

let weekendevents = events
  .filter((e) => {
    return (
      (new Date(e.date).getDay() === 0 || new Date(e.date).getDay() === 6) &&
      e.gender === "Female"
    );
  })
  ;
console.log(weekendevents);