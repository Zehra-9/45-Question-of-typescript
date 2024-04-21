let userNames: string[] = ["admin", "madara", "baki", "zenitsu", "beerus"];

userNames.forEach(userName => {
    if(userName === `admin`){
        console.log(`Hello admin, would you like tosee a status report?`);
    }
      else{
        console.log(`Hello  ${userName}, thank you for logging in again`);
      }
    

})