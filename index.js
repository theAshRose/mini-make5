const inquirer = require("inquirer")
const fs = require("fs")

function writeHTML(data){
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="./assets/style.css">
      <title>${data.name}'s Portfolio</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid jumcolor">
        <div class="container">
          <h1 class="display-4">${data.name}</h1>
          <img src="${data.photo}">
          <p class="lead">I am from ${data.location}. ${data.bio}</p>
          <h3>
            Example heading <span class="badge badge secondary">Contact Me</span>
          </h3>
          <ul class="list-group">
            <li class="list-group-item"><a href ="https://github.com/${data.gitHub}">Github</li>
            <li class="list-group-item"><a href="${data.linkedIn}">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `
}

function writeToFile(obj, value) {
  fs.writeFile("index.html", value, (event) => {console.log("error")})
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
}, ]).then(function(data){
  writeToFile("index.html", (writeHTML(data)))
})