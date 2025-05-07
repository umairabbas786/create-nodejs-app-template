const sendTemplatedEmail = require("../config/mailer");

const sendWelcomeEmail = async (userEmail, userName) => {
  const subject = "Welcome to Our Service!";
  const templateName = "welcomeEmail";
  const data = { name: userName };

  try {
    const emailData = await sendTemplatedEmail(
      userEmail,
      subject,
      templateName,
      data
    );
    if (!emailData) {
      console.log("Failed to send email");
    } else {
      console.log("Email sent successfully:", emailData);
    }
  } catch (error) {
    console.error("Failed to send welcome email:", error);
  }
};

module.exports = { sendWelcomeEmail };
