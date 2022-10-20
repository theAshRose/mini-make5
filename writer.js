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
    return;
}

module.exports = writeHTML;

