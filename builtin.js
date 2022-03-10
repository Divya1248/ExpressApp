const express = require("express");
const app = express();

// custom middleware
app.use(function (req, res, next) {
  if (req.url === "/shashi") {
    console.log("my custom middleware is executing");
  }
  next();
});

// static built in middleware
app.use(express.static(__dirname + "/public"));

// basic routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// listen port
app.listen(4000, err => {
  if (err) throw err;
  console.log("express app is running on port number 4000");
});
