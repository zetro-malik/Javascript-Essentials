const nodemailer = require("nodemailer");
const fs = require("fs")
const path = require('path')

async function main() {
  try {
    // Create a transporter with your Gmail account
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 587, false for other ports
      requireTLS: true,
      auth: {
        user: "xxx1@gmail.com",
        pass: "", // Use your Gmail App Password here
      },
      tls:{
        rejectUnauthorized:false
    }
    });

    
    const emailTemplate = fs.readFileSync(path.join(__dirname,"emailTemplate.html"))

    // Define the email message
    let info = await transporter.sendMail({
      from: "xxx1@gmail.com",
      to: "xxx2@gmail.com",
      subject: "Testing, testing, 123",
      html:emailTemplate.toString(),
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main();
