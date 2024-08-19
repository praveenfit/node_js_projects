require('dotenv').config()
const mongoose=require('mongoose')
const dbconnection=async(url)=>{
    try {
       return mongoose.connect(url)
    } catch (error) {
        console.log(error)  
    }
}
module.exports={dbconnection}