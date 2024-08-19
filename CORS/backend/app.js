require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const route=require('./routes/routes')
const cors=require('cors')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
const start=()=>{ app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})}

app.use(express.json())

app.use('/api/users',route)


start()