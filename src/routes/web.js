const express = require("express");
const router = express.Router();
const { getHomePage, getUser } = require("../controllers/homeController");
const {
  registerUser,
  showUser,
  editUser,
} = require("../controllers/userController");

router.get("/helloworld", getHomePage);
router.get("/user", getUser);
router.post("/register", registerUser);
router.get("/getalluser", showUser);
// router.get('/edit/:id/:age', editUser);
router.put("/edit",editUser)
module.exports = router;
