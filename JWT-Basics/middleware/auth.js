const jwt=require('jsonwebtoken')
require('dotenv').config()
 const jwtVerify=async(req,res,next)=>{
    const title=req.headers.authorization
    const token=title.split(" ")[1]
    if (token) {
        const decoded=jwt.verify(token,process.env.SECRET)
        console.log(decoded)
        console.log("json webtoken verified")
        next()
    } else {
        return res.status(500).send("token not authrized")
        
    }
   
 }
 module.exports=jwtVerify;