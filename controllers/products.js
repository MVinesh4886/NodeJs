const path = require("path");
const products = [];

exports.getAddproduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addproduct.html"));
};

exports.postAddproduct = (req, res, next) => {
  console.log(req.body);
  products.push(req.body);
  //   res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
