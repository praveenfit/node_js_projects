const users  = require('../model/users')
const books=require('../model/books')



const register=async(req,res)=>{
    try {
        const user =req.body
    const newUser= await users.create(user)
    res.status(201).json({message:"user created successfully",data:newUser})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}

const getbooks=async(req,res)=>{
    try {
        const fetchTask=await books.find({})
        res.json(fetchTask)
    } catch (error) {
        res.status(500).json({message:"Error fetching books",error:error.message})
        
    }
}


const postBooks=async (req,res)=>{
    try {
        const book=req.body
        const newBooks=await books.create(book)
        res.status(201).json({message:"Book created successfully",data:newBooks})
    } catch (error) {
        res.status(500).json({message:"Error creating book",error:error.message})
        
    }
}
module.exports={getbooks,postBooks,register}
