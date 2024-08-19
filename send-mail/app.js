require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.PORT
const sendMail=require('./controllers/email')
const router=require('./routes/email')
app.use(express.json())
app.use('/api/v1/email',router)
app.get('/',(req,res)=>{
    res.send(`<h1>send email project</h1><a href='/api/v1/email/sendMail'> click here to send email </a>`)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})