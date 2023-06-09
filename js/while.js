console.log("Inside while.js");

// Create a while loop that uses console.log() to create the output shown below.

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

function doubleInput(num) {
    while (true) {
        console.log(num);
        num *= 2;
        if (num > 66000) break;
    }
}
doubleInput();

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number
// between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your
// code should generate another random number between 1 and 5, simulating the amount of cones being bought by her
// clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code
// shows how to get the random numbers for this exercise.

function sellMyCones(){
    const allCones = Math.floor(Math.random() * 50) + 50;
    do{
        const customerCones = Math.floor(Math.random() * 5) +1;
        if(allCones - customerCones < 0){
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue;
        }else if (allCones - customerCones === 0){
            console.log('yay! I sold them all!');
            break;
        }else{
            console.log(`${customerCones} cone sold.`);
            allCones -= customerCones;
        }
        console.log(`I now have ${allCones} cones left`);
    } while(true);
}
sellMyCones()

