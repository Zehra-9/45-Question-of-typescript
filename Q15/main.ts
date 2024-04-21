let guestarray: string[] =["Fatima","Darshna","Qirat","Shayan","Aliya"];

let canNotAttenden: string ="Fatima";

console.log(canNotAttenden    +  ' '+ "can not make it, for dinner");

let newguest: string = "Rida"

guestarray[guestarray.indexOf(canNotAttenden)] =newguest;
// console.log(guestarray);

guestarray.map((item)=>
console.log(`Dear ${item},you are cordinally invited to a dinner`)

)

