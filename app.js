const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template")

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github Username (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your Github username.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some info for an 'About Me' section?",
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: ({ confirmAbout }) => confirmAbout
        }
    ]);
};


const promptProject = portfolioData => {

    console.log(`
    ====================
    Add a New Project
    ====================
    `);

    // if there are no projects, create empty array for projects to be added
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your project? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a project name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "description",
                message: "Provide a description of this project (Required)",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log("You must enter a project description.");
                        return false;
                    }
                }
            },
            {
                type: "checkbox",
                name: "languages",
                message: "What did you build this project with?",
                choices: ["JavaScript", "HTML", "CSS", "jQuery", "Boostrap", "ES6", "Node"]
            },
            {
                type: "input",
                name: "link",
                message: "Enter the Github link to your project. (Required)",
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log("You must enter a Github link for your project!");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "feature",
                message: "Would you like to feature this project?",
                default: false
            },
            {
                type: "confirm",
                name: "confirmAddProject",
                message: "Would you like to enter another project?",
                default: false
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        const pageHTML = generatePage(portfolioData);

        fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err);

            console.log("Page created! Check out index.html in this directory to see it!");

        });
    });








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

