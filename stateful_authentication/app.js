const express=require('express')
const bodyparser=require('body-parser')
const ejs=require('ejs')
const app=express()
const session=require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const userSchema=require('./models/User')


const {mongoConnect}=require('./db/connection')
require('dotenv').config()


//use ejs
app.set('view engine','ejs')
app.use(express.json())
app.use(express.static('public'))
// middleware to take inputs from from
app.use(express.urlencoded({extended:true}))

// const store=new MongoDBStore({
//     uri:process.env.MONGO_URI,
//     collection:'mySessions'
// })
// app.use(session({   
//     secret:process.env.SECRET_KEY,
//     resave:false,
//     saveUninitialized:true,
//     store:store
// }))

app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/dashboard',(req,res)=>{
    res.render('welcome')
})

// app.post('/register',async(req,res)=>{
//     const{username,email,password}=req.body
//    try {
//     const newUser=new userSchema({
//         username,email,password
//     })
//     await newUser.save()
//     res.redirect('/login')
//    } catch (error) {
//     console.log(error)
//     res.redirect('/signup')
    
//    }
// })
// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;

//     // Check if all fields are provided
//     if (!username || !email || !password) {
//         return res.status(400).send('All fields are required');
//     }

//     try {
//         const newUser = new userSchema({
//             username,
//             email,
//             password
//         });
//         console.log(username,email,password)
//         await newUser.save();
//         res.redirect('/login');
//     } catch (error) {
//         console.error(error);
//         if (error) {
//             return res.status(400).send('Email already exists');
//         }
//         res.status(500).send('Error registering user');
//     }
// });
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    try {
        // Check if the email already exists
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already exists');
        }

        const newUser = new userSchema({
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        });

        console.log('email',req.body.email);
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error('Error registering user:', error);
        if (error.code === 11000) { // Duplicate key error
            return res.status(400).send('Email already exists');
        }
        res.status(500).send('Error registering user');
    }
});



// get all users from database
app.get('/users', async (req, res) => {
    try {
        const users = await userSchema.find({});
        res.json(users);

        
    } catch (error) {   
        console.error(error);
        res.status(500).send('Error fetching users');
    }

})











const start=async()=>{
    try {
        await mongoConnect(process.env.MONGO_URI)
        // create mongodb session store
        
        app.listen(process.env.PORT || 3000,()=>{
            console.log(`server is running on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log(error) 
    }
}
start()
