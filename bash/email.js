var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: '173200@ids.upchiapas.edu.mx',
    pass: 'awesome777rexomg'
  }
});

var mailOptions = {
  from: '173200@ids.upchiapas.edu.mx',
  to: 'mmoreno@ids.upchiapas.edu.mx',
  subject: 'Prueba Cron ',
  text: 'It works :)'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 