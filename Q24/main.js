"use strict";
let apple = "apple";
let uppercase = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//equlity and inequality test.
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
// using lowercase function.
console.log("\nis APPLE is equale to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() == "apple");
console.log("\nis APPLE is equale to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() != "apple");
// Numericle test.
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nis ten is not to twenty");
console.log(ten != twenty);
//greater than.
console.log("\nis ten is greater than zero");
console.log(ten > 0);
//less than.
console.log("\nis twenty is less than 10");
console.log(twenty < 10);
//greater than or equal to.
console.log("\nis ten isgreater tahn or equal to 5?");
console.log(ten >= 5);
//less than or equale to.
console.log("\n twenty is less than or equale to 10");
console.log(twenty <= 10);
//using  "and" & "or"operators.
console.log("\ntwenty is not equal to 10 twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 twenty is greator than 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR).
console.log("20 is greator than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greator than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// an item is include in array
console.log("\n is orange include in fruits aaray");
console.log(fruits.includes("orange"));
// not include
console.log("\n is orange not include in fruits aaray");
console.log(!fruits.includes("orange"));
