const sendTemplatedEmail = require("../config/mailer");

const sendWelcomeEmail = async (userEmail, userName) => {
  const subject = "Welcome to Our Service!";
  const templateName = "welcomeEmail";
  const data = { name: userName };

  try {
    await sendTemplatedEmail(userEmail, subject, templateName, data);
    console.log(`Welcome email sent to ${userEmail}`);
  } catch (error) {
    console.error("Failed to send welcome email:", error);
  }
};

module.exports = { sendWelcomeEmail };
