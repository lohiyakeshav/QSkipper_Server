// const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
dotenv.config()

// const app = express();
// app.use(express.json());
// app.use(express.static("public"));



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.pass_key
    }
});
async function sendOTPEmail(email, otp) {
    try {
      // Read the email template file
      const templatePath = path.join(__dirname, '../public/emailTemplate.html');
      console.log(`Reading email template from: ${templatePath}`);
      
      let emailTemplate = fs.readFileSync(templatePath, 'utf8');
      console.log(`Template loaded successfully, size: ${emailTemplate.length} bytes`);
      
      // Replace the placeholder OTP with the actual OTP
      emailTemplate = emailTemplate.replace('123456', otp);
      console.log(`OTP replaced in template: ${otp}`);
      
      const mailOptions = {
        from: 'priyanshugupta.112002@gmail.com',
        to: email,
        subject: 'Verify Your Email - QSkipper',
        html: emailTemplate,
        text: `Your OTP for verification is: ${otp}`, // Plain text fallback
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent with HTML template: ${info.response}`);
      return { success: true };
    } catch (error) {
      console.error(`Error sending OTP email: ${error.message}`);
      console.error(error.stack);
      return { success: false, error };
    }
  }
  
module.exports = { sendOTPEmail };

// app.post('/send-email', (req, res) => {
//     console.log("Sending");
//     const { email, password, name , } = req.body;
//     console.log(email, password, name);

    

//     // Read the HTML template file
//     const templatePath = path.join(__dirname, './public', 'emailTemplate.html');
//     fs.readFile(templatePath, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading email template.');
//         }

//         // const imagePath = path.join(__dirname, 'images', 'banner.png');
//         // const base64Image = fs.readFileSync(imagePath, 'base64');
//         // const base64ImageString = `${base64Image}`;


//         // Replace placeholders with actual values
//         let customizedTemplate = data.replace('{{name}}', name)
//                                      .replace('{{email}}', email)
//                                      .replace('{{password}}', password);
//                                      //.replace('{{base64Image}}', base64ImageString);

//         // Customize the email content with user-specific details
//         const mailOptions = {
//             from: 'keshavlohiyabusiness@gmail.com',
//             to: email,
//             subject: 'Librarian Credentials',
//             html: customizedTemplate
//         };

//         // Send email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return res.status(500).send(error.toString());
//             }
//             res.status(200).send('Email sent: ' + info.response);
//         });
//     });
// });

