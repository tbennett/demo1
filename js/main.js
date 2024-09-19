/* 
simple slides
A demo for arrays and Events
*/

// first make a shortcut variable for the button
const next_button = document.getElementById("next");
//console.log(next_button);

//next define an array of images to use
let myPics = ["frog1.jpg", "frog2.jpg", "frog3.jpg", "frog4.jpg"];
//console.log(myPics[4]);

// crete shortcut var for the image element
let frame = document.getElementById("pic");

// make a variable to keep track of which image to show
let counter = 0;

//make button work
next_button.addEventListener("click", function (e) {
    //increment the counter to get next image
    counter++;
    console.log(counter);

    //check to see value of counter isn't out of bounds. If so, reset.
    if (counter == myPics.length) {
        counter = 0;
    }

    // swap the photo
    frame.src = "images/" + myPics[counter];
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
