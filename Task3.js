var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'byseaswar@gmail.com',
        pass:'Eswareswar'
    }
});
    var mailOptions={
        from:'byseaswar@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending from 21A25A0402',
        text:'Morning Sir'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('email sents'+info.response);
        }
    });