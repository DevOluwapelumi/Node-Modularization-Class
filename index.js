const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const app = express()
const env = require('dotenv').config()
const userRouter = require("./Routers/user.router")
PORT=process.env.PORT||5000
URI=process.env.URI

mongoose.connect(URI).then(()=>{
    console.log('App connected to database successfully');
}).catch((err)=>{
    console.log("Erorr occour while connecting to database", err);
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(express.json({ limit: '10mb' }))
app.use('/user', userRouter)

app.listen(PORT, (req, res)=>{
    console.log('Server begin at PORT', PORT);
})