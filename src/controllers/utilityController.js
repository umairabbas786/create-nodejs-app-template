const { uploadUserProfileImage } = require("../services/utilityService");

const uploadImageController = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image file is required" });
  }

  try {
    const imageUrl = await uploadUserProfileImage(req.file.path);
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ message: "Image upload failed" });
  }
};

module.exports = { uploadImageController };
