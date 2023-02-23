const express = require("express");
const router = express.Router();
// const protect = require("../middleWare/authMiddleWare")
//also removed getUser from below
const { registerUser, loginUser, logoutUser} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
// router.get("/getUser", getUser);

module.exports = router;