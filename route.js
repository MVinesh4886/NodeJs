const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>
      <head><title>My First Page</title></head>
      <body><form action="/message">
      <input type="text" name="message"><button type="submit">SEND</button></form></body>
      </html>`);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
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
};

// module.exports = requestHandler;// This handles single export.

//if we have multiple requests, then we create an object to handle multiple exports likewise
// module.exports = {
//   requestHandler: requestHandler,
//   sometext: "Hello world",
// };

//or else we can write individually to handle exports
// module.exports.requestHandler = requestHandler;
// module.exports.sometext = "Hello Universe";

//other way is simply furhter
exports.requestHandler = requestHandler;
exports.sometext = "Hello Galaxy";
