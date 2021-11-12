const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const productApiObj = express.Router();
const multerObj = require("./middleware/addProductImage");
const checkToken = require("./middleware/verifyToken");
const ObjectId = require("mongodb").ObjectId;

// body parser middleware
productApiObj.use(express.json());

let productCollection;
//get productCollection  obj
productApiObj.use((req, res, next) => {
  productCollection = req.app.get("productCollection");
  next();
});

// add product
productApiObj.post(
  "/addproduct",
  checkToken,
  multerObj.array("productImg", 5),
  expressAsyncHandler(async (req, res) => {
    // get productObj
    const productObj = JSON.parse(req.body.productObj);

    var imageUrlList = [];

    for (var i = 0; i < req.files.length; i++) {
      var localFilePath = req.files[i].path;
      imageUrlList.push(localFilePath);
    }

    productObj.image = [...imageUrlList];

    await productCollection.insertOne(productObj);
    res.send({ message: "New Product Added", payload: productObj });
  })
);

module.exports = productApiObj;
