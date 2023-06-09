console.log("Inside break_and_continue.js");

//  2.Prompt the user for an odd number between 1 and 50. Use a loop and a break
// statement to continue prompting the user if they enter invalid input.
//  3.Use a loop and the continue statement to output all the odd numbers between
//  1 and 50, except for the number the user entered
function numberONeThroughFiffty(){
    return prompt('enter an odd number from 1 to 50');
}
// function promptUnitOdd(){
//     do{
//         const userNumber = numberONeThroughFiffty();
//         if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0){
//             console.log(`Number to skip is ${userNumber}`);
//             for(let i= 1; i<= 50; i++){
//                 if(i === userNumber){
//                     console.log(`yikes! skipping ${userNumber}`);
//                     continue;
//                 }
//             if(i % 2){
//                 console.log(`Here's an odd number: ${i}`);
//             }
//             break;
//             }
//         console.log("Invalid input");
//         }
//     } while(true);
// }
// promptUnitOdd();

                // One way of doing it ^


function promptBetweenONeAndFiftyOdd(){


let num;
do {
    num = prompt("Please enter an odd number between 1-50?");
    if(isValid(num)) {
        alert("Number entered is outside the acceptable range or an even number. Please try again.");
    }
    else
        break;
} while (true);
return num;
}
let userNumber = promptBetweenONeAndFiftyOdd(){


for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}
}