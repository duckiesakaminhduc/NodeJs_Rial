const express = require("express");
const router = express.Router();
const { getHomePage, getUser } = require("../controllers/homeController");
const {
  registerUser,
  showUser,
  editUser,
  getById,
  deleteUserById,
} = require("../controllers/userController");

router.get("/helloworld", getHomePage);
router.get("/user", getUser);
router.post("/register", registerUser);
router.get("/getalluser", showUser);
// router.get('/edit/:id/:age', editUser);
router.put("/edit", editUser);
router.get("/getUserById/:id", getById);
router.delete("/delete/:userId", deleteUserById);
module.exports = router;
