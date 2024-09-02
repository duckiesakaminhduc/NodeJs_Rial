const express = require("express");
const app = express();
require("dotenv").config(); //phai cai dotenv+ cho nao can dung bien moi truong thi phai them vao

const port = process.env.PORT;

var path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello World 123!");
  // res.render("helloworld");
});

app.listen(port, () => {
  console.log(`Example app listening on port:http://localhost:${port}/`);
});
