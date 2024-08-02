const express=require('express')
const body=require('body-parser')
const {people}=require('./data')
const app=express()
const port=process.env.PORT || 3000

//parse from data
// app.use(express.urlencoded({extended:false}))
app.use(body.json())

app.get('/getPeople',(req,res)=>{
    res.json(people)
})

app.post('/login',(req,res)=>{
    const username=req.body
    if(username){
        
        res.json({message:'login success',data:[...people,username]})
    }
    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})