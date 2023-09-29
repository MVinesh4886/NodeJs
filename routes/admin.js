// create an admin route or addproduct route to the main server that is app.js
// //import express
// const express = require("express");

// const router = express.Router();

// //admin/addproduct -GET
// router.get("/addproduct", (req, res, next) => {
//   res.send(
//     //at first, we have just "/addProduct" and now we change it to /admin/addProduct
//     '<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

// //here, "/product" was used before. Now we changed it to "/addproduct"

// //admin/addproduct -POST
// router.post("/addproduct", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// module.exports = router;

//serving addproduct file from views to the main server app.js
const path = require("path");
const express = require("express");

//we import the path
const rootDir = require("../util/path");

const router = express.Router();

//admin/addproduct -GET
router.get("/addproduct", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "addproduct.html"));

  //above code is step by step approach which we can follow otherwise this is much cleaner way to sendFile
  res.sendFile(path.join(rootDir, "views", "addproduct.html"));
});

//here, "/product" was used before. Now we changed it to "/addproduct"

//admin/addproduct -POST
router.post("/addproduct", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
