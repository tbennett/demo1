/* 
simple slides
A demo for arrays and Events
*/

const next_button = document.getElementById("next");
//console.log(next_button);

let myPics = ["frog1.jpg", "frog2.jpg", "frog3.jpg", "frog4.jpg"];
//console.log(myPics[4]);

let myPic = document.getElementById("pic");
let counter = 0;
//make button work
next_button.addEventListener("click", function (e) {
    counter++;
    //check to see value of counter
    if (counter == myPic.length - 1) {
        counter = 0;
    }
    console.log(counter);
    myPic.src = "images/" + myPics[counter];
});

//Let's look at condtionals

const myNum = 4;

if (myNum > 6) {
    console.log("greater");
} else if (myNum < 6) {
    console.log("less");
} else {
    console.log("equal");
}

console.log(5 > 8 || 3 < 5);

if (!(myNum > 7)) {
    console.log("whoa!");
}
