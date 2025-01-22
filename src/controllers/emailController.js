const { sendWelcomeEmail } = require("../services/emailService");

const sendWelcomeEmailController = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: "Email and name are required" });
  }

  try {
    await sendWelcomeEmail(email, name);
    res.status(200).json({ message: "Welcome email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
};

module.exports = { sendWelcomeEmailController };
