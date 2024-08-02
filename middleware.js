Middleware1=(req,res,next)=>{
    console.log('middleware1 invoked from outside module')
    next()
}
middleware2=(req,res,next)=>{
    console.log('middleware invoked from outside module')
    next()
}
module.exports={Middleware1,middleware2}