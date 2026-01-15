// control flow in JavaScript

// if-else statement
if(temperature == 40){
    console.log{"less then 50"}
}
else {
    console.log("temperature is greater then 50");
}

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}
// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do-while loop

let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);
// ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);
// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log("Odd number: " + i);
}
