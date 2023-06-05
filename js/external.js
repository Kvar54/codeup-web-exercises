"use strict"

alert ("Welcome to my website!")

let userInput = prompt ("What is your favorite color?")
console.log(`Great,${userInput} is my favorite color too!`)


let userResponse = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?")

let pricePerDayDollars = 3;
let littleMermaidDaysRented = 3;
let brotherBearDaysRented = 5;
let herculesDaysRented = 1;

let price = pricePerDayDollars * (littleMermaidDaysRented +  brotherBearDaysRented + herculesDaysRented);
 if(parseFloat(userResponse) === price){
alert(`Correct! The price is ${price}`);

 } else {
  alert(`Incorrect! The correct answer is ${price} `);
 }


let userAnswer = prompt ("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.")

let GoogleHourlyRate = 400;
let AmazonHourlyRate = 380;
let FacebookHourlyRate = 350;

let GoogleHrsWorked = 6;
let AmazonHrsWorked = 4
let FacebookHrsWorked = 10;
let USDollar = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
});

let weekPay = (GoogleHourlyRate * GoogleHourlyRate) + (AmazonHrsWorked + AmazonHourlyRate) + (FacebookHrsWorked + FacebookHourlyRate);
 if (parseFloat(userAnswer) === weekPay){
  alert (`Correct! The week payment is ${USDollar.format(weekPay)}`);
 } else {
  alert(`Incorrect! The correct answer is  ${USDollar.format(weekPay)}`);
 }


let MaximumCapacity = 20;
 let currentEnrollment = 19;
 let newEnrollment;

let userReply = confirm ("Do you want to enroll? Currently the class has a max capacity of " +  MaximumCapacity + " students. Here is how many students have enrolled: " + currentEnrollment);

if(userReply == true){
 newEnrollment = currentEnrollment + 1;

 if(newEnrollment <= MaximumCapacity){
  let checkSchedule = confirm("Great, there are seats available for the 2:30pm class on Monday. Does this time conflict with your schedule, if so, select cancel?");

  if(!checkSchedule == true){
   alert('No problem, you can try and enroll for another time.');

  }else{
   alert('Great! you are enrolled in the class!');

  }
 }else{
  alert('Sorry Enrollment is full!');

 }

}else{
 alert('No problem, you can enroll whenever you are ready.');
}


let product = confirm ("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products. Press cancel if you are a premium member?" )

if(product == true){

 let expirationCheck = confirm("Is the offer on your product valid? If so, select OK");

 if(expirationCheck){
  let items  = prompt("How many items are you purchasing?");

  if(items >= 2){
   alert("Congrats! Your offer can be applied.");
  }else{
   alert("Sorry, but this offer cannot be applied.");

  }

 }else{
  alert('Sorry, but this offer cannot be applied.');

 }

}else{
alert("Product offer will be applied.");

}

