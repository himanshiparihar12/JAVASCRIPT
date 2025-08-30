//Find usernames containing "dev" (case-insensitive):
const users = ["Devraj", "Ravi", "kdev007", "Deval", "Amit"];
const devusers = users.filter((x) => x.toLowerCase().includes("dev"));
console.log(devusers);