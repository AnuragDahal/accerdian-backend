import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendReferralEmail = async (to: string, referrerName: string) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: "You've Been Referred!",
    html: `<p>Hello! Your friend ${referrerName} has referred you!</p>`,
  };

  return transporter.sendMail(mailOptions);
};
