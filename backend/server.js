const express=require('express')
const dotenv=require('dotenv').config()
const path=require('path')
const port=process.env.PORT || 8000;
const connectDB=require('./config/db')
const app=express()


connectDB()


const cors = require('cors')

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get((req,res)=>{
    res.send('Api running')
})


app.use('/',require('./routes/adminRoutes'))

app.use('/',require('./routes/employeeRoutes'))




app.listen(port,()=>console.log(`Server started on port ${port}`))