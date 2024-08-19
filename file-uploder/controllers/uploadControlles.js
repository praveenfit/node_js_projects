const path=require('path')
const uploadProductImage=async (req,res)=>{
    try {
        const image=req.files.Image
        const imagePath=path.join(__dirname,'../public/images',image.name)
        await image.mv(imagePath)
        return res.json({image:{src:`/uploads/${image.name}`}}) 
    } catch (error) {
        res.status(400).send("not uploaded")
        
    }
}
module.exports={uploadProductImage}