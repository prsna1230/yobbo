const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const userApiObj = express.Router();
const bcryptjs = require("bcryptjs");

// body parser middleware
userApiObj.use(express.json());

let userCollection;
// get userccollection object(middle-ware)
userApiObj.use((req, res, next) => {
  userCollection = req.app.get("userCollection");
  next();
});

// registration
userApiObj.post(
  "/createaccount",
  expressAsyncHandler(async (req, res) => {
    const newUser = req.body;
    let user = await userCollection.findOne({ username: newUser.username });
    // if user existed send res as "username existed"
    if (user !== null) {
      res.send({ message: "Username already Existed choose another" });
    } else {
      // hashpassword
      let hashedPassword = await bcryptjs.hash(newUser.password, 3);
      newUser.password = hashedPassword;
      //   insert userObj to usercollection
      await userCollection.insertOne(newUser);
      // send res
      res.send({ message: "Success" });
    }
  })
);

module.exports = userApiObj;
