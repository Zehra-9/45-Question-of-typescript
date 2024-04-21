"use strict";
let guestArr = ["Rida", "Darshna", "Qirat", "Shayan", "Aliya"];
let canNotAttend = "Shayan";
let newGuest = "Amna";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//  guestArr.map((item) => (
//  console.log(`Dear ${item}, I found a bigger Dinner Table`)
//  ));
let guestBegin = "Zainab";
guestArr.unshift(guestBegin);
// console.log(guestArr);
let middleGuest = "Aimen";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
guestArr.push("Sarah");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, you are Cordinally invitde to a Dinner.`)));
