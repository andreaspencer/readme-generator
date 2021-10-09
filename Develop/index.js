// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require('./src/readme-page.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Your need to enter a title!');
                    return false;
                }
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you intall your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Your need to provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to explain how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['MIT', ],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You need to check a license for your project!')
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your Github username',
        validate: questionInput => {
            if (questionInput) {
                return true;
            } else {
                console.log('You need to enter a valid Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Success! Information transfered to the ReadMe!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generatePage(userInput));
    });
};

// Function call to initialize app
init();
