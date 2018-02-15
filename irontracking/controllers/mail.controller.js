const nodemailer = require('nodemailer');


module.exports.sendMail = (req, res, next) => {
    var coment = req.body.comentarios;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAILIRONTRACKING, // generated ethereal user
            pass: process.env.PASSIRONTRACKING // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: `"Irontracking 👻" <${process.env.EMAILIRONTRACKING}>`, // sender address
        to: `${process.env.PRUEBAEMAIL}`, // list of receivers
        subject: 'S.O.S. desde Irontracking', // Subject line
        // text: 'Hello world?', // plain text body para cuando no acepta maquetacion
        html: `<b>Hello Manolo</b><br>
                ${coment}`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s');
    });

    res.redirect('/dashboard');

};