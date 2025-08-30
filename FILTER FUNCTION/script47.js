let date = new Date();
console.log(date);
date = date.toISOString();
console.log(date);
console.log(typeof date);
let newdate = date.slice(0, 10);
let time = date.slice(11, 19);
console.log(newdate);
console.log(time);