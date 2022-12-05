const express = require("express");
const http = require("http");
const { sendOtp, nodeMail, authorizeOtp } = require("./Email/MailOtp");
const app = express();
const server = http.createServer(app);
var bodyParser = require("body-parser");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.post("/otp",nodeMail,sendOtp)
app.get("/otp",authorizeOtp)

app.get("/", (req, res) => {
    res.send({message:"First Apis"})
  });
server.listen(port, () => {
    console.log("Server is Running");
  });