const express=require('express')
const app=express()
const port=process.env.PORT || 3000
app.get('/home',(req,res)=>{
    res.send("home page")

})
app.all('*',(req,res)=>{
    res.send("404 page not found")
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('Hello World\n')

// })
// server.listen(5000)