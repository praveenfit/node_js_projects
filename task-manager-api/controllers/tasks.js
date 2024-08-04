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
const updateTasks=async (req,res)=>{
    try {
        const id=req.params.id
        const updatedTask=req.body
        const newTask=await task.findByIdAndUpdate(id,updatedTask,{new:true})
        res.status(200).json({message:"Task updated successfully",data:newTask})
    } catch (error) {
        res.status(500).json({message:"Error updating task",error:error.message})
        
    }
}
const deleteTasks=async (req,res)=>{
    try {
        const taskId=req.params.id
        const deleteTask=await task.findByIdAndDelete(taskId)
        res.status(200).json({message:"Task deleted successfully",data:deleteTask})
    } catch (error) {
        res.status(500).json({message:"Error deleting task",error:error.message})
    }
}
module.exports={getTasks,
    getSingleTasks,
    postTasks,
    updateTasks,
    deleteTasks
}