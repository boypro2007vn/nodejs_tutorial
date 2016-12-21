var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://namintelvn%40gmail.com:zhzppzkaqbywvpwb@smtp.gmail.com');

var mailOptions = {
    from: '"Nam Tran 👥" <foo@blurdybloop.com>', // sender address
    to: 'namintelvn1@gmail.com', // danh sách mail nhận
    subject: 'Hello ✔', // tiêu đề
    text: 'Hello world 🐴', // nội dụng mail đơn giản
    html: '<b>Iam Nam 🐴</b>' // nội dụng mail dạng html
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
