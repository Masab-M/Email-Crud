const nodemailer = require("nodemailer");
function sendOtp(req, res) {
  const email = req.body;
  res.status(200).send({
    address: email.email,
    message: "Otp Send",
  });
}

async function nodeMail(req, res, next) {
  if (req.body.email) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    var otp = Math.floor(1000 + Math.random() * 9000);
    req.otp=otp;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "email", // generated ethereal user
        pass: "password", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let mailOptions = {
      from: `"pm@mtechub.com" <pm@mtechub.com>`, // sender address
      to: `"${req.body.email}"`, // list of receivers
      subject: `Mail Otp`, // Subject line
      text: `Dont share this`, // plain text req.body
      html: `<h1>Mail: </h1>
      <h3><strong>OTP: </strong>${otp}</h3>`, // html req.body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).send({ status: "Not send" });
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      next();
    });
  }
  else{
    res.status(400).send({ status: "Missing 'email' field" });
  }
}

function authorizeOtp(req, res) {
  res.status(200).send({ message: "ok" });
}
module.exports = {
  authorizeOtp,
  nodeMail,
  sendOtp,
};
