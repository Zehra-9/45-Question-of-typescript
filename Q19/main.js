var myfriends = ["Erum", "Hina", "Ahsan", "Ali", "Farzan"];
console.log("i am inviting ".concat(myfriends.length, "number of friends to my dinner which are following/n"));
for (var i = 0; i < myfriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(myfriends[i], " "));
}
