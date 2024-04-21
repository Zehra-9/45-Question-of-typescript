"use strict";
let alienColor = "green";
//write an if statement to test where the alien color is green. if it is, 
// print a message  that the player juest earend 5 points.
if (alienColor === `green`) {
    console.log("player just earned 5 points");
}
//write one version of this program that passes the if test and anatherthat fails.
alienColor = "yellow";
// (the version that fails will have not output.)
if (alienColor === "green") {
    console.log("player just earned 5 points");
}
