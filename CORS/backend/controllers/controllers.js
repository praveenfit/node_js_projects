

const express=require('express')
const app=express()
const users=require('../users')


const getUsers=(req,res)=>{
    res.json(users)
}

module.exports=getUsers