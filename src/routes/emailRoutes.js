const express = require("express");
const {
  sendWelcomeEmailController,
} = require("../controllers/emailController");

const router = express.Router();

router.post("/send-welcome-email", sendWelcomeEmailController);

module.exports = router;
