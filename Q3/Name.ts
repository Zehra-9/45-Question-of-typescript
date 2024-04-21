let personname: string ="Farzan Abbas";

console.log(personname.toLowerCase());
console.log(personname.toUpperCase());



let firstletter: string = personname.charAt(0).toUpperCase();
let restletter: string = personname.slice(1).toLowerCase();

let titleCase = firstletter + restletter;

console.log(titleCase);