const path = require("path");
// const products = [];
const Product = require("../models/product");

exports.getAddproduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addproduct.html"));
};

exports.postAddproduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  //   products.push(req.body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
