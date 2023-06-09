"use strict";

//
//
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

       // 7 x 1 = 7
       // 7 x 2 = 14
       // 7 x 3 = 21
       // 7 x 4 = 28
       // 7 x 5 = 35
       // 7 x 6 = 42
       // 7 x 7 = 49
       // 7 x 8 = 56
       // 7 x 9 = 63
       // 7 x 10 = 70

       function showMultiplicationTable(number) {
           for (let i = 1; i <= 10; i++) {
               console.log(`${number} x ${i} = ${number * i}`);
           }
       }

// for(let x= starting point; x= # of times it runs; x= Increment)


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20
// and 200 and output to the console whether each number is odd or even. For example:


// step 1 google how to generate random number in the right range.

// step2 write a loop that prints your name 10X
// let times = 10;
// while (times > 0) {
//     console.log('keila Vargas');
//     times--;

// step3 refactor the loop to print a random # 10x

// let max = 200;
// let min = 20;
// for (let i = 0; i < 10; ++i) {
//     const random = (Math.floor(Math.random() * (max - min + 1) + min))
//     console.log(random)
//     if (random % 2 === 0)
//         console.log("is even")
//     if (random % 2 !== 0)
//         console.log("is odd")
//
// }

// step 4 apart from the loop google how to find if a number is even or odd

// if(number % 2==0) {
//     return "number is even"
// }
// if(number % 2!==0) {
//     return "number is odd"

// step 5 store the random # in the variable & check if the variable is an even or odd number

// Create a for loop that uses console.log to create the output shown below.

           for (let i = 1; i <= 10; ++i) {
               console.log(`${i.toString().repeat(i)}`)

           }
function numPyramidButDifficult(){
    let onelevelpyramid ='';
    for(let i = 1; i<= 9; i++){
        for(let j= 1; j<= i; j++){
            onelevelpyramid = onelevelpyramid + i
            console.log(onelevelpyramid);
        }
    }
}
// Another way to do it ^

// Create a for loop that uses console.log to create the output shown below.

           for (let i = 100; i >= 5; i = i - 5) {
               console.log(i);
           }


