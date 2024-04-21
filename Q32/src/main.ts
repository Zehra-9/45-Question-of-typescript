let current_user: string[] = ["FarZan", "AbeEr", "JaZil", "Ali", "john"];

let new_user: string[] = ["Talib", "FarZan", "Safeer", "JaZil"];

new_user.forEach(newUsername => {
let lowerCase: string = newUsername.toLowerCase();
  
if(current_user.map(c_user=>c_user.toLowerCase()).includes(lowerCase)){

    console.log(`the username ${newUsername} is not available. plaese write a diffrent username`);
}
else{
    console.log(`username ${newUsername} is available`);
}
})