const express = require("express");
const router = express.Router();
const { getHomePage, getUser } = require("../controllers/homeController");
const { registerUser } = require("../controllers/userController");


router.get("/helloworld", getHomePage);
router.get("/user", getUser);
router.post("/register", registerUser);

module.exports = router;
