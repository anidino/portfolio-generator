const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template")

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
    .then(answers => { console.log(answers) });









// const pageHTML = generatePage(name, github);


// fs.writeFile("./index.html", pageHTML, err => {
//     if (err) throw err;

//     console.log("Portfolio complete! Check out index.html to see the output!");
// });







//// DON'T NEED THIS CODE FOR ASSIGNMENT, JUST KEPT FOR REFERENCE ////////////////////////////////////////////////////////////////////////////
// const profileDataArgs = process.argv.slice(2);


// Notice the lack of parentheses around the 'profileDataArr' parameter
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("================");

//     // Is the same as this... 
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);


// const message = "Hello Node!";

// if (true === true) {
//     const message = "Hello ES6!";
//     let sum = 5;
//     sum += 10;
//     console.log(message);
//     console.log(sum);
// }

// console.log(message);
// console.log(sum);

