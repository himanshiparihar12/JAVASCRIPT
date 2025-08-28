// Filter courses with duration more than 6 months.
const courses = [
  { id: 1, name: "Full Stack Dev", duration: 12 },
  { id: 2, name: "Data Entry", duration: 3 },
  { id: 3, name: "AI & ML", duration: 8 },
  { id: 4, name: "Tally", duration: 4 }
];
const longCourses = courses.filter(course => course.duration > 6);

console.log(longCourses);