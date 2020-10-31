const mailer = require('nodemailer');
const { quote } = require('./quote_template');

require('dotenv').config();

const getEmailData = (to, token, template, actionData) => {
  let data = null;

  switch (template) {
    case 'quote':
      data = {
        from: 'The Web Dev <asite303@aol.com>',
        to,
        subject: `Recieved a new quote`,
        html: quote(actionData),
      };
      break;
    default:
      return data;
  }
  return data;
};

const sendEmail = (to, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    service: 'AOL',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mail = getEmailData(to, token, type, actionData);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
    }
  });
};

module.exports = { sendEmail };
