require("dotenv").config(); //phai cai dotenv+ cho nao can dung bien moi truong thi phai them vao
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const configViewEngine = require("./config/viewEngine");
configViewEngine(app);
const webRouter = require("./routes/web");
//config to get request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", webRouter);

app.get("/", function (req, res) {
  res.render("user.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port:http://localhost:${port}/`);
});


