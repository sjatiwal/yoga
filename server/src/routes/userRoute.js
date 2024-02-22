const express = require("express");
const router = express.Router();
const {
  loginUserOTP,
  registerUserOTP,
  registerUser,
  loginUser,
} = require("../controllers/userController");

router.route("/loginotp").post(loginUserOTP);
router.route("/registerotp").post(registerUserOTP);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
