// Filter users who have verified their email.
const users = [
  { id: 1, name: "Nikhil", emailVerified: true },
  { id: 2, name: "Sana", emailVerified: false },
  { id: 3, name: "Alok", emailVerified: true },
  { id: 4, name: "Gauri", emailVerified: false }
];
const verifiedUsers = users.filter(user => user.emailVerified);

console.log(verifiedUsers);