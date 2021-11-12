// create express app
const express = require("express");
const app = express();

// configure dotenv
require("dotenv").config();

// import path module
const path = require("path");

// connect build of react app with express
app.use(express.static(path.join(__dirname, "./build")));

// special Route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

// import APIS Object
const userApiObj = require("./APIS/userApi");
const adminApiObj = require("./APIS/adminApi");
const productApiObj = require("./APIS/productApi");

// user userAPiObj when path starts with users
app.use("/users", userApiObj);
app.use("/admin", adminApiObj);
app.use("/product", productApiObj);

// import mongodb module
const mongoClient = require("mongodb").MongoClient;

// get database URL
const DATABASE_URL = process.env.DATABASE_URL;

// connect
mongoClient.connect(DATABASE_URL, (err, client) => {
  if (err) {
    console.log("err in db connect", err);
  } else {
    // get Obj of database
    let databaseObject = client.db("yobbo");
    // get obj of collection
    let userCollection = databaseObject.collection("usercollection");
    let adminCollection = databaseObject.collection("admincollection");
    let productCollection = databaseObject.collection("productcollection");

    // set to app project
    app.set("userCollection", userCollection);
    app.set("adminCollection", adminCollection);
    app.set("productCollection", productCollection);

    console.log("DB was Successfully Connected..!");
  }
});

// assign port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
