const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const env = require ('dotenv').config()
const PORT = process.env.PORT
const URI= process.env.URI
const cors = require("cors")
const userRoute = require("./Routes/userRoutes")

 
mongoose.connect(URI)
.then(()=>{
    console.log('Mongo connected suessfully');
}).catch((err)=>{
    console.log(err);
})


app.use(cors())
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user", userRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
