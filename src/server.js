require("dotenv").config(); //phai cai dotenv+ cho nao can dung bien moi truong thi phai them vao
const express = require("express");
const app = express();
const port = process.env.PORT;
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
app.use("/demo", webRouter);
configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port:http://localhost:${port}/`);
});
