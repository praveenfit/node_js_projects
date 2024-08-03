const express=require('express')
const body=require('body-parser')
const {people}=require('./data')
const productRoute=require('./productsRouters')
const app=express()
const port=process.env.PORT || 3000

//parse from data
// app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(body.json())
// app.use(body.urlencoded({extended:false}))

// app.use('/api',productRoute)

app.get('/getPeople',(req,res)=>{
    res.json(people)
})

app.post('/login',(req,res)=>{
    const username=req.body
    if(username){
        
        res.json({message:'login success',data:[...people,username]})
    }
    
})

//////crud operatons///
app.post('/create',(req,res)=>{
    const name=req.body
    people.push(name)
    if(name){
        res.json({message:'create success',data:name})
    }

})
app.put('/update',(req,res)=>{
    const id=req.body
    people.find((items)=>{
        if(Object.keys(items)==1){
            items.id=id
            res.json({message:'update success',data:items})
            
        }
    })
    
    console.log(people)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})