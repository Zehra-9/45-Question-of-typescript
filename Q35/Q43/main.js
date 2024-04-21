"use strict";
const magicianNames = ["gandolf", "orge", "paladin", "warloc"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
        console.log(magician + "   " + "the Great");
    }
}
show_magicians(magicianNames);
