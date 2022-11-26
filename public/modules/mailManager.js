const nodemailer = require('nodemailer');
const config = require('./config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.mail_username,
      pass: config.mail_password,
      refreshToken: config.refreshToken,
      accessToken: config.accessToken,
      clientId: config.clientID,
      clientSecret: config.clientSecret,
    }
});

module.exports = {
    transporter,
};