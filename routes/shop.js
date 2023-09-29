// create an shop router and export to the main server that is app.js
// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("<h1>Hello from Express!</h1>");
// });

// module.exports = router;

//serving shop.html file to the main server that is app.js
const path = require("path");
const express = require("express");

// const rootDir = require("../util/path");
const productsController = require("../controllers/products");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });

router.get("/", productsController.getProducts);

module.exports = router;
