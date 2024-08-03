const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    // name:String,
    // completed:Boolean
    // basic input validatios
    name:{
        type:String,
        require:true,
        maxlength:20,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',taskSchema)