//PRINT 'YES YOU CAN DRIVE' OR 'NO YOU CANNOT DRIVE' BASED ON AGE BEING GREATER THAN
//18 USING TERNARY OPERATOR

const prompt = require("prompt-sync")();
let age = Number(prompt("Enter the Age = "));  
let a = age>=18 ?"Yes you can Drive" :"No you cannot Drive";
console.log(a);