const mysql = require("mysql2/promise");
const mongoose = require("mongoose");
// Thiết lập cấu hình kết nối
// const connection = mysql.createPool({
//   host: process.env.HOST,
//   port: process.env.DB_PORT,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
 
const connection = async () => {
  const option = {
    user: process.env.USER,
    pass: process.env.MONGOOSE_PASS,
    dbName:process.env.DB_NAME
  };
  mongoose.connection.on("connected", () => console.log("connected"));
  mongoose.connection.on("open", () => console.log("open"));
  mongoose.connection.on("disconnected", () => console.log("disconnected"));
  mongoose.connection.on("reconnected", () => console.log("reconnected"));
  mongoose.connection.on("disconnecting", () => console.log("disconnecting"));
  mongoose.connection.on("close", () => console.log("close"));
  await mongoose.connect(process.env.MONGOOSE_HOST, option);
};

module.exports = connection;
