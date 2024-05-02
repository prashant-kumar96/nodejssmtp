const nodemailer = require("nodemailer");

const senderEmail = "prashant.kumar560@gmail.com";
const recieverEmail = "Vinendersingh91@gmail.com";

// Create a Nodemailer SMTP transport object
const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 587, // or 2587 for TLS
  auth: {
    user: "", // SMTP username provided by Amazon SES
    pass: "", // SMTP password provided by Amazon SES
  },
});

// Define email options
const mailOptions = {
  from: senderEmail,
  to: recieverEmail,
  subject: "Test Email",
  text: "Hai This is the body of the email for testing perpose of aws ses on date 02may 12:21pm",
};

// Send email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
