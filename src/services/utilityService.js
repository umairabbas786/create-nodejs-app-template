const uploadImage = require("../config/cloudinary");

const uploadUserProfileImage = async (imagePath) => {
  try {
    const imageUrl = await uploadImage(imagePath);
    console.log("Profile image uploaded:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Failed to upload profile image:", error);
  }
};

module.exports = { uploadUserProfileImage };
