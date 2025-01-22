const express = require("express");
const multer = require("multer");
const {
  uploadImageController,
} = require("../controllers/utilityController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload-image", upload.single("image"), uploadImageController);

module.exports = router;
