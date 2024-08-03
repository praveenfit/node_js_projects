const {people}=require('../data')

const getPeople=(req,res)=>{
    res.json(people)
    console.log(people)
}

const postData=(req,res)=>{
    const newuser=req.body
    const newPerson=newuser
    people.push(newPerson)
    res.send('data posted')
    console.log(people)
}
module.exports={getPeople,postData}