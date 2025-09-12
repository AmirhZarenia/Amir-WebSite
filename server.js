const express = require('express');
const app = express();
require('dotenv').config();


// ارسال کردن ایمیل
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');



global.config = require('./config');


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Middleware Send Email
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Route برای ارسال ایمیل
app.post('/send-email', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // پیکربندی nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.PASSWORDEMAIL
        }
    });

    // تنظیمات ایمیل
    let mailOptions = {
        from: email,
        to: process.env.MYEMAIL, // ایمیل مقصد (همان ایمیل شما)
        subject: subject,
        text: `
            نام: ${name}
            ایمیل: ${email}
            تلفن: ${phone}
            موضوع: ${subject}
            پیام: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('ایمیل با موفقیت ارسال شد');
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).send('خطا در ارسال ایمیل');
    }

});



app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', require('./routes/index'));


app.listen(config.port, () => { console.log(`listen port ${config.port}`) })