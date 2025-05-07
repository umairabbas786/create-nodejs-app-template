const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: process.env.MAIL_PORT || 587,
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Function to send an email with an EJS template.
 * @param {string} to - Recipient email.
 * @param {string} subject - Email subject.
 * @param {string} templateName - Template file name (without .ejs extension).
 * @param {Object} data - Data to inject into the template.
 */
const sendTemplatedEmail = async (to, subject, templateName, data) => {
  try {
    const templatePath = path.join(
      __dirname,
      "../emails",
      `${templateName}.ejs`
    );
    
    const htmlContent = await ejs.renderFile(templatePath, data);

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendTemplatedEmail;
