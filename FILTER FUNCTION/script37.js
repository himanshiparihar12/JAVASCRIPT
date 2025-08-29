// Filter tasks with dueDate before today (assume today is "2025-04-23").
const tasks = [
  { id: 1, title: "Submit Resume", dueDate: "2025-04-20" },
  { id: 2, title: "Attend Seminar", dueDate: "2025-04-24" },
  { id: 3, title: "Project Meeting", dueDate: "2025-04-21" },
  { id: 4, title: "Course Signup", dueDate: "2025-04-23" }
];

const overdueTasks = tasks.filter(task => new Date(task.dueDate) < new Date("2025-04-23"));
console.log(overdueTasks);