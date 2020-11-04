// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
const utility = require ('util');

inquirer
.prompt([
{
    type: "input",
    message: "what is the name of the project?",
    name: "title",
},
{
    type: "input",
    message: "give some installation instructions",
    name: "instructions",
},
{
    type: "input",
    message: "How do you intend for your code to be used?",
    name: "usage",
},
{
    type: "list",
    message: "What License do you wish to use?",
    name: "license",
    choices: ["MIT", "Mozilla Public License", "GPL", "Apache License" ]
},
{
    type: "input",
    message: "Who all contributed to your project? List them and a brief summary",
    name: "contributions",
},
{
    type: "input",
    message: "What kind of testing did you use on your project?",
    name: "tests",
},
{
    type: "data",
    message: "What is your email?",
    name: "email",
},
{
    type: "input",
    message: "What is your github username?",
    name: "github",
},
{
    type: "input",
    message: "What is your linked in page ?",
    name: "linkedin",
},
])
.then((data) => {
const generatedREADME = generateMarkdown (data);
fs.writeFile("GeneratedReadme.md", generatedREADME, (err) =>{
    if (err) throw err;
    console.log("generated readme");
});
});

