var nodemailer = require("nodemailer");

export async function sendMail(
  subject: string,
  fromEmail: string,
  otpText: string
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "naoltamrat36@gmail.com",
    subject: subject,
    text: otpText + " " + fromEmail,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
