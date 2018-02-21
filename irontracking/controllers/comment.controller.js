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
        html: `<body style=" text-align:  center;">
                <div syle="background-color: blue"><h1>Irontracking</h1></div>
                <b>Hello Manolo</b><br>
                
                <p> Estas recibiendo este correo como stress signal de Irontracking </p>
                
                <p> Es posible que <b>${user.displayName}</b> se haya quedado atascado en el ejercicio <b>${ejercicio.name}</b> y no sepa como avanzar, por lo que te ha mandado el siguiente mensaje:
                    
                </p><div style="display: block;text-align:  center;">
                <div style=" background-color: rgba(0, 127, 237, 0.2); border: 1px solid rgba(0, 127, 237, 0.2);
                box-shadow:  0 0 50px -6px rgba(67, 67, 73, 0.3); display:  inline-block; max-width: 350px; ">
                <b style="vertical-align:  middle;> ${coment} asdaaaaaaaaaaaa AOSNDK OASD NAOSD NAPOSD APSOD ANSKLD AS</b></div></div>
            
            
                <p></p></body>`
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