const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addProduct", (req, res, next) => {
  // console.log("I'm the first middleware");
  // res.send('<h1>The "add product" Page</h1>');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("I'm the second middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(4000, () => {
  console.log("server has started");
});
