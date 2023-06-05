"use strict"
//Function w/o parameter
//function sayHello(){
  //  console.log("wassup")
//}
//Invoking AKA calling a function
//sayHello();

//function sayBye(){
   // console.log("Peace out")
//}
//sayBye();

// function sayHelloUser(usersUsername){
//     console.log("wassup"+ usersUsername)
// }
// Invoking with a argument
// sayHelloUser("Kobe");

// Refactor to use arguments and parameters
//function sayBye(username){
  //  console.log("Peace out," + usersUsername)
//}
//sayBye("Tom");

// function sayBye(username){
//    return "Peace out," + username
// }
// const functionResp = sayBye("Tom");
// console.log(functionResp);

//Global scope example

// function sayBye(){
//     const username = "bobby";
//    console.timeLog(" you will always see me " + username);
// }
//  sayBye();
//local scope
// function sayBye(){
//     const username= "bobby"
//     console.log("you will always see me " + username)
// }
//  sayBye();

// function addFourDivideByTwo(num){
//     const sum = num + 4;
//     const dividedByTwo = divideByTwo(sum);
//     return dividedByTwo
// }
//
// function divideByTwo(num){
//     return num / 2;
// }
//
// console.log(addFourDivideByTwo(5));

//function declaration
// function sayHello(){
//  console.log("Hello")
// }
// sayHello();

//Function Expression
// const sayHello = function (){
// console.log("hello")
// };
// sayHello();

//Arrow function
// const sayHello = () => {console.log("Hello")};
// sayHello();

    // (function(){
    //     const dog1 = "darla";
    //
    //     function walk(){
    //
    //     }
    // }

function addSum(num1, num2){
    console.log(num1 + num2)
}

addSum(2,3)