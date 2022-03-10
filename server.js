// const express = require("express");
// const fs = require("fs");
// // creates express application by using top level function
// const app = express();

// // add middleware to request
// app.use(function (req, res, next) {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
//   let text = fs.readFileSync("./text.html", "utf-8"); //everytime response reads the text file
//   console.log(text);
//   next(); //to end the execution (if next is not written it will be loading continuously)
// });

// // basic express routing
// app.get("/", (req, res) => {
//     res.send("ok this is express");
//   res.sendFile(__dirname + "/text.html");
// });

// // listen a port
// app.listen(5000, err => {
//   if (err) throw err;
//   console.log("express app is running on port number 5000");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/text.html");
});
app.listen(5000, err => {
  if (err) throw err;
  console.log("express app is running on port number 5000");
});
