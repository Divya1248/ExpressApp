const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

// handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// app.set("views", "./views");

// render the data and output
app.get("/", (req, res) => {
  res.render("home.handlebars");
});

app.listen(5000, err => {
  if (err) throw err;
  console.log("express is running on port number 5000");
});
