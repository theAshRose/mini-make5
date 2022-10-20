const inquirer = require("inquirer")
const getHTML = require("./writer.js")
const fs = require("fs")

function writeToFile(data) {
  fs.writeFile("index.html", data, (event) => {console.log("error")})
}

inquirer.prompt([{
  name: "name",
  message: "What is your name?",
  type: "input",
}, {
  name: "photo",
  message: "Give us a photo of yourself/work as a profile pic",
  type: "input",
}, {
  name: "location",
  message: "Where do you operate and work?",
  type: "input",
}, {
  name: "bio",
  message: "Please enter a bio",
  type: "input",
}, {
  name: "linkedIn",
  message: "Please enter linkedIn profile link",
  type: "input",
}, {
  name: "gitHub",
  message: "what is your github user name? (not the link!)",
  type: "input",
}]).then(function(data){
  console.log(getHTML(data))
  writeToFile("index.html", getHTML(data))
})