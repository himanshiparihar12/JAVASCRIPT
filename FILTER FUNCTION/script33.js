// Filter sessions that are marked as completed.
const sessions = [
  { id: 1, topic: "React Basics", completed: true },
  { id: 2, topic: "Redux", completed: false },
  { id: 3, topic: "Node.js", completed: true },
  { id: 4, topic: "MongoDB", completed: false }
];
const completedSessions = sessions.filter(session => session.completed);

console.log(completedSessions);