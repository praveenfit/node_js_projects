 const jwt=require('jsonwebtoken')
 require('dotenv').config()
 const login=async(req,res)=>{
    const {username,password}=req.body;
    if (username || password) {
        console.log(username,password)
        const token=jwt.sign({username,password},process.env.SECRET)
        console.log(token)

    } else {
        return res.status(400).send({message: "Please enter both username and password"})
        
    }
    res.send("fake login or register")
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.send(`Welcome to dashboard: your lucky number is  ${luckyNumber}`)
}

module.exports={login,dashboard}