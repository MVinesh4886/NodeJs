//import express
const express = require("express");

const router = express.Router();

//admin/addproduct -GET
router.get("/addproduct", (req, res, next) => {
  res.send(
    //at first, we have just "/addProduct" and now we change it to /admin/addProduct
    '<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

//here, "/product" was used before. Now we changed it to "/addproduct"

//admin/addproduct -POST
router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
