//Packages needed for the application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");
// These are the questions the user must answer to generate the readme
const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "gitHub",
      },
      {
        type: "input",
        message: "Please enter your email.",
        name: "email",
      },
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Please describe your project.",
        name: "description",
      },
      {
        type: "input",
        message: "Please describe how to install your project",
        name: "install",
      },
      {
        type: "list",
        message: "Please select (if any) the licences that must be applied to your README file.",
        name: "license",
        choices: ["MIT", "ISC", "BSD", "Apache-2.0"],
      },
      {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "What does the user need to know about contributing to the repository?",
        name: "contribution",
      },
    ];

// Function writes the readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File created! Please see the Readme folder!")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('./Readme/README.md', generateMarkdown(data));
  });
}

// Function call to initialize app
init();
