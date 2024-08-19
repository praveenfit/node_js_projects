const nodemailer = require("nodemailer");


const sendMail=async(req,res)=>{
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      } 
    });

    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <praveen@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>sending email with node.js?</b>", // html body
      });
      res.json(info)
      console.log("Message sent: %s", info.messageId);
}

module.exports=sendMail