const errorMiddleware=(err,req,res,next)=>{
    
    return res.status(500).send({message:err.message});
    

}
module.exports={errorMiddleware}