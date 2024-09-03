const conn = require("../config/database");
const getHomePage = (req, res) => {
  res.send("Hello world 123");
};

const getUser = (req, res) => {
  let user = [];
  conn.query("Select * from user", function (err, resutl, fields) {
    user = resutl;
    res.send(JSON.stringify(user));
  });
};

module.exports = {
  getHomePage,
  getUser,
};
