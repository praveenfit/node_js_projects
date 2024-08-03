const mongoose=require('mongoose')
// const connectionString="mongodb+srv://praveen:praveen123@cluster0.vz2ifib.mongodb.net/taskManagerAPI?retryWrites=true&w=majority&appName=Cluster0"

 const connectDB=(url)=>{
    return mongoose.connect(url)
 }
module.exports=connectDB;