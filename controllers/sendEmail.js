const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "gonzalo.bergstrom@ethereal.email",
      pass: "cQ7fKxNtdKp3ua3DFG",
    },
  });

  const info = await transporter.sendMail({
    from: '"Tiago Luis" <tiagoluisie@gmail.com>',
    to: "tiago7164@hotmail.com",
    subject: "Hello ✔",
    html: "<h2>Sending email with nodejs and nodemailer</h2>",
  });
  res.json(info);
};

module.exports = sendEmail;
