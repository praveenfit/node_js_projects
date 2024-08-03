const task=require('../model/taskSchema')

const getTasks=async (req,res)=>{
    try {
        const fetchTasks=await task.find({})
        res.status(200).json({message:"Tasks fetched successfully",data:fetchTasks})
    } catch (error) {
        res.status(500).json({message:"Error fetching tasks",error:error.message})
    }
}
const getSingleTasks=async (req,res)=>{
   try {
    const getbyId=req.params.id
    const fetchTasks=await task.findById(getbyId)
    res.status(200).json({message:"Task fetched successfully",data:fetchTasks})
   } catch (error) {
    res.status(500).json({message:"Error fetching task",error:error.message})
   }
}
const postTasks=async (req,res)=>{
   try {
    const newTask=req.body
    const createdTask=await task.create(newTask)
    res.status(201).json({message:"Task created successfully",data:createdTask})
   } catch (error) {
    res.status(500).json({message:"Error creating task",error:error.message})
   }
}
const putTasks=(req,res)=>{
    res.send("update tasks")
}
const deleteTasks=(req,res)=>{
    res.send("delete tasks")
}
module.exports={getTasks,
    getSingleTasks,
    postTasks,
    putTasks,
    deleteTasks
}