const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const userLanguages = users.filter(user => user.languages.length >= 3);
console.log(`Users that know three languages or more: ${userLanguages}`);
// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);

console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
users.forEach(user => {
    console.log(`The Years of a user's Experience are: ${user.yearsOfExperience}yrs.`);
});
const totalYearsOfExperience = users.reduce((accumulator, user) => accumulator + user.yearsOfExperience, 0);
const averageYearsOfExperience = totalYearsOfExperience / users.length;
console.log(`The total average of user experience is: ${averageYearsOfExperience}yrs.`);

// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accumulator, user) => {
    if (accumulator.length < user.email.length) {
        return user.email;
    }
    return accumulator;
}, '');
console.log(`The longest User email is: ${longestEmail}`);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((accumulator, user) => accumulator === '' ? user.name : `${accumulator}, ${user.name}`, '');
console.log(`Your instructors are: ${userNames}.`);

