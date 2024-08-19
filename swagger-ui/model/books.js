const mongoose=require('mongoose')
 const schema=mongoose.Schema({
    //schema for books
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,

    },
    year:{
        type:Number,
        required:true
    }

 })
 module.exports=mongoose.model('books',schema)