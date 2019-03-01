const express=require('express')
const mongoose=require('mongoose')

const app=express()


//Load /auth/google route
const auth=require('./routes/auth')




app.get('/',(req,res)=>{
    res.send('Home page')
})

//use routes
app.use('/auth',auth)

const PORT=process.env.PORT||5000

app.listen(PORT,(req,res)=>{
    console.log('The server is up and running at '+PORT)

})


