const mailer = require('nodemailer');
const { Hello } = require('./hello_template');
const { Thanks } = require('./thanks_template');

const getEmailData = (to, name, template) => {
  let data = null;

  switch (template) {
    case 'hello':
      data = {
        from: 'Alex Ilyasov <velmo@mail.ru>',
        to,
        subject: `Hello ${name}`,
        html: Hello()
      }
      break;

    case 'thanks':
      data = {
        from: 'Alex Ilyasov <velmo@mail.ru>',
        to,
        subject: `Hello ${name}`,
        html: Thanks()
      }
      break;

    default:
      data;
  }
  return data;
}

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    auth: {
      user: 'velmo',
      pass: '2210DomVelmoren'
    }
  })

  const mail = getEmailData(to, name, type)

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log('email send success!');
    }

    smtpTransport.close()
  })
}

module.exports = { sendEmail }