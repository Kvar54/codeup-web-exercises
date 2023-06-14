(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {
    //     firstName: "Keila",
    //     lastName: "Vargas",
    // }
    // console.log(person.lastName);
    // console.log(person.firstName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    const person = {
        firstName: "Keila",
        lastName: "Vargas",
        sayHello() {
            return `Hello from ${this.firstName} ${this.lastName}! `
        }
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     *
     *
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    function hebDiscountString(shopper) {
        let name = shopper.name;
        let amount = (shopper.amount).toFixed(2);
        let discount = (shopper.amount * 0.12).toFixed(2);
        let discountedAmount = (shopper.amount * 0.88).toFixed(2)
        let message = "";
        if (shopper.amount > 200) {
            message = message + `${name} spent $${amount}.`;
            message += `you received a discount! You saved: $${discount}`;
            message += `Your total is now: $${discountedAmount}`;
            return message;

        } else {
            return (`${name} spent $${amount}.You did not receive a discount.You saved nothing: your total remains: $${amount}`);
        }
    }

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach((shopper) => {
        // console.log(`${shopper.name} spent ${shopper.amount}.${shopper.amount > 200 ? shopper.amount * 0.88 : shopper.amount}`)
// if(shopper.amount > 200){
        // console.log((`${shopper.amount} spent $${shopper.amount.toFixed(2)}. you got the discount! you just saved: $${(shopper.amount * 0.12).toFixed(2)}.your newtotal is: $${discount}.`))
// }
        console.log(hebDiscountString(shopper));


    })
// name, amount, discount, amount after discount



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const book = [
        {
            title: 'Unbought and Unbossed',
            author: {
                firstName: "Shirley",
                lastName: "Chisholm"
            }

        },
        {title: "Ficciones", author: {firstName: "Jorge", lastName: "Borges"}},
        {title: "The Body Keeps The Score", author: {firstName: "Bessel", lastName: "Kolk"}},
        {title: "In Cold Blood", author: {firstName: "Truman", lastName: "Capote"}},
        {title: "A Gentle Reminder", author: {firstName: "Bianca", lastName: "Sparacino"}}

    ];
    console.log(books);


    console.log(books[0].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

   books.forEach((book, index)=>{
       console.log(`book #${index + 1}`);
       console.log(`Title: ${book.title}`);
       console.log(`Author: ${book.author} ${book.author.lastName}`);
       if(index < books.length -1)
           console.log("---");
   })
    for (let book = 0; book < books.length ; book++){
        console.log("")
        console.log(book + 1)
        console.log(books[book].title)
        console.log(books[book].author.firstName)
        console.log(books[book].author.lastName)
        console.log("")
    }



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title, author: {
                firstName: authorFirstName, lastName: authorLastName
            }

        };
    }

    let books = createBook("Unbought and Unbossed", "Shirley", "Chisholm");
    createBook("Ficciones", "Jorge", "Borges");
    createBook("The Body Keeps The Score", "Bessel", "Kolk");
    createBook("In Cold Blood", "Truman", "Capote");
    createBook("A Gentle Reminder", "Bianca", "Sparacino")

    books.push(createBook("in cold blood", "truman", "capote"));

    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    }

    showBookInfo(books[2]);

})();
