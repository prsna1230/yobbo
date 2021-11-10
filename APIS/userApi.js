const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const userApiObj = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { decrypt } = require("./authorizedRequest/EncryptionDecryption");
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
    const { encryptedObj } = req.body;
    console.log(encryptedObj);
    const newUser = decrypt(encryptedObj);
    console.log(newUser);
    let user = await userCollection.findOne({ email: newUser.email });
    // if user existed send res as "username existed"
    console.log(user);
    if (user) {
      res.send({ message: "Email already Existed choose another" });
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
// user login
userApiObj.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    let { userCredential } = req.body;
    let userCredentialObj = decrypt(userCredential);
    let user = await userCollection.findOne({
      email: userCredentialObj.email,
    });
    if (user === null) {
      res.send({ message: "Invalid Email" });
    } else {
      let status = await bcryptjs.compare(
        userCredentialObj.password,
        user.password
      );
      if (status === false) {
        res.send({ message: "Invalid Password" });
      } else {
        let signedToken = await jwt.sign(
          { email: user.email },
          process.env.SECRET,
          { expiresIn: "1d" }
        );
        res.send({ message: "success", token: signedToken, user: user });
      }
    }
  })
);
module.exports = userApiObj;
