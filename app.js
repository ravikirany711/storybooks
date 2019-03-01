const express=require('express')
const mongoose=require('mongoose')
const passport=require('passport')

const app=express()

//passport config
require('./config/passport')(passport)


//Load /auth/google routes
const auth=require('./routes/auth')




app.get('/',(req,res)=>{
    res.send('Home page')
})

//Use routes
app.use('/auth',auth)

const PORT=process.env.PORT||5000

app.listen(PORT,(req,res)=>{
    console.log('The server is up and running at '+PORT)

})


