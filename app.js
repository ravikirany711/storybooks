const express=require('express')
const mongoose=require('mongoose')

const app=express()

app.get('/',(req,res)=>{
    res.send('Home page')
})

const PORT=process.env.PORT||5000

app.listen(PORT,(req,res)=>{
    console.log('The server is up and running at '+PORT)

})


