require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const jwt=require('jsonwebtoken')
const app=express()
port=3000
app.use(express.json())
const users=[{
    id:1,
    username:"praveen",
    password:"praveen",
    isAdmin:"ture"
},{
    id:2,
    username:"praveen1",
    password:"praveen1",
    isAdmin:"false"
}]

const verifyUser=(req,res,next)=>{
    const getToken=req.headers.Authorization
    console.log(getToken)
    
    if(getToken){
        const token=getToken.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(401).json({message:"Invalid token"})
            }
            req.user=user
            console.log(user)
            next()

        })
    }else{
        res.status(401).json({message:"No token provided"})
    }
}
app.post('/register',(req,res)=>{
const {username,password}=req.body
const user=users.find((person)=>{
    
    return person.username==username && person.password=== password
})
if(user){
    const accessToken=jwt.sign({
        username:user.username,
        isAdmin:user.isAdmin,
        password:user.password
    },process.env.SECRET)
    console.log(accessToken)
    res.json({
        username:user.username,
        token:accessToken
    })
}
else{
    res.status(404).send("user not found")
    
}
})

app.delete('/api/users/:id',verifyUser,(req,res)=>{
    if(req.user.id===users.params.id || req.user.isAdmin ){
        res.status(200).json("user is deleted")
    }else{
        res.status(403).json("you dont have permission to delete this user")

    }

})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})