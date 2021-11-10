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

// assign port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
