import { reverse } from "dns";

let  myplaces: string[]= ["Lahore", "Islamabad", "Peshawar", "Quetta", "Karachi", "Sukkhur", ];

// console.log(myplaces);
let copyOfArry = myplaces.slice();
let sortedArry = copyOfArry.sort();
// console.log(sortedArry);

// print orignalArry
// console.log(myplaces);


// reversing orignalArry
let copyOfArry2 = myplaces.slice();
let reverseOriArry = copyOfArry2.reverse();
 //console.log(reverseOriArry);

// printing orignalArry
 //console.log(myplaces);



let reverseOriArry2= myplaces.reverse();
 //console.log(reverseOriArry2);

let againreverse = reverseOriArry2.reverse();
 //console.log(againreverse);      //  same as orignal array


 //sorting orignal array
 let sortOriArray = myplaces.sort();
  console.log(sortOriArray);


 let reversesortedArray  = sortOriArray.reverse();
 console.log(reversesortedArray);
