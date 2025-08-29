//Filter lectures that are scheduled on or after "2025-06-01".
const lectures = [
  { id: 1, topic: "React Basics", date: "2025-04-28" },
  { id: 2, topic: "Redux", date: "2025-05-02" },
  { id: 3, topic: "TypeScript", date: "2025-05-05" },
  { id: 4, topic: "Node.js", date: "2025-04-30" },
 { id: 5, topic: "Python", date: "2025-08-15" }
];
const filteredLectures = lectures.filter(
  lecture => new Date(lecture.date) >= new Date("2025-06-01")
);
console.log(filteredLectures);