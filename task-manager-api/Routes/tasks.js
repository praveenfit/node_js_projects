const express=require('express')
const {getTasks,getSingleTasks,postTasks,putTasks,deleteTasks}=require('../controllers/tasks')
const router=express.Router()

router.get('/allTasks',getTasks)
router.get('/singleTask/:id',getSingleTasks)
router.post('/addTask',postTasks)
router.put('/updateTask/:id',putTasks)
router.delete('/deleteTask/:id',deleteTasks)
module.exports=router