const express=require('express')
const app=express()
const {data}=require('./data')
const middleware=require('./middleware')
const {getPeople,postData}=require('./CONTROLLERS/peopleControllers')

const port=process.env.PORT || 3000
//app.use is used if all the routes need middleware
app.use(middleware.Middleware1,middleware.middleware2)
app.get('/',(req,res)=>{
    res.send('<h1>click below</h1> <a href="/required_data" >Visit W3Schools.com!</a>'
    )
})
app.get('/users',(req,res)=>{
    res.json(data)
})
app.get('/required_data',(req,res)=>{
    const new_data=data.map((product)=>{
        const {id,name,price}=product
        return {id,name,price}
    })
    res.json(new_data)
})
//req params
app.get('/single_product/:productId',(req,res)=>{
    const id=req.params.productId
    const productId=data.find((product)=>product.id===id)
    res.json(productId)
})
//query strings
app.get('/products/api/query',(req,res)=>{
    const {id,limit} =req.query
    let newData=[...data]
    if(id){
        newData=newData.filter((product)=>{
            return product.id>Number(id)
        })
    }
    if(limit){
        newData=newData.slice(0,Number(limit))
    }
    res.json(newData)
    

})
app.get('/getUsers',getPeople)

app.post('/postData',postData)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})