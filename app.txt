const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //console.log("Krishna"); printing the name in the command prompt
  //console.log(req.url, req.method, req.headers);
  // creating a response
  const url = req.url;

  if (url === "/") {
    res.write(`<html>
    <head><title>My First Page</title></head>
    <body><form action="/message">
    <input type="text" name="message"><button type="submit">SEND</button></form></body>
    </html>`);
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFile("message.txt", parsedBody, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
  <head><title>My First Page</title></head>
  <body><h1>Hello from Node.js Server!</h1></body>
  </html>`);
  res.end();
});

server.listen(4000, () => {
  console.log("server has started");
});

//create home file
// fs.writeFile(
//   "home.html",
//   `<h1>This is home Page</h1>

//   `,
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been created");
//     }
//   }
// );

//create About file
// fs.writeFile(
//   "about.html",
//   `<h1>This is About Page</h1>

//   `,
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been created");
//     }
//   }
// );

//create node file
// fs.writeFile(
//   "node.html",
//   `<h1>This is node Page</h1>

//   `,
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been created");
//     }
//   }
// );

//Listen to event
// server.on("request", (req, res) => {
//   console.log(req, req.method);
//   //get the url
//   const url = req.url;
//   if (url === "/") {
//     //read content on login html page
//     fs.readFile("home.html", (err, data) => {
//       //check err
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
//   if (url === "/about") {
//     //read content on login html page
//     fs.readFile("about.html", (err, data) => {
//       //check err
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
//   if (url === "/node") {
//     //read content on login html page
//     fs.readFile("node.html", (err, data) => {
//       //check err
//       if (err) {
//         console.log(err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });
