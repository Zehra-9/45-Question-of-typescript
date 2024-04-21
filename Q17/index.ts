// console.log("i can invite only two people to Dinner");

// // let guestarry: string[]= ["Erum", "Hina", "Ahsan", "Ali"];

// while(guestarry.length >2){
let removeGuest  = guestarry.pop();
console.log(`Dear ${removeGuest}, you are not invited to the dinner`)


guestarry.map((item)=>
console.log(`Dear ${item}, you are still invited to the dinner`)

);

guestarry.pop();
console.log(guestarry);

