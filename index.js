// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
   type: 'input',
   message: 'What is your project title name?',
   name: 'title',
},
{
   type: 'input',
   message: 'Write a description of your project.',
   name: 'description',
},
{
   type: 'input',
   message: 'Provide installation instructions.',
   name: 'installation'
},
{
   type: 'input',
   message: 'Provide usage information.',
   name: 'usage'
},
{
   type: 'input',
   message: 'Provide credit for your project.',
   name: 'credits'
},
{
   type: 'list',
   message: 'Provide all licenses used for your project.',
   name: 'license',
   choices: ['MIT', 'Apache', 'BSD', 'N/A']
},
{
   type: 'input',
   message: 'What are the features of your project.',
   name: 'features'
},
{
   type: 'input',
   message: 'How to contribute to the project.',
   name: 'contributions'
},
{
   type: 'input',
   message: 'Provide testing instructions.',
   name: 'tests'
},
{
   type: 'input',
   message: 'What is your Github account URL?',
   name: 'github'
},
{
   type: 'input',
   message: 'What is your email?',
   name: 'email'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then((data) => {
      writeToFile(generateMarkdown(data))
   })
}
// Function call to initialize app
init();
