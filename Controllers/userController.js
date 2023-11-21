const User = require('../Models/userModel');

const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const upload = (req,res) => {
  // console.log(req.body.file)
  let uploadedFile = req.body.file;

  cloudinary.v2.uploader.upload(uploadedFile, (err, result) => {
    if(err){
      console.log(err);
    }
    else{
      let myImage = result.secure_url;
      // console.log(result.secure.url);
      res.send({status : true,  message:"File uploaded successfully", myImage})
    }
  })

}

const { compare } = require("bcrypt") 
const userWelcome = (req, res) => {
    res.send('Welcome to the user route')
    console.log('welcome page');
}

const registerUser = async (req, res) => {
    // console.log("user registered");
    // console.log(req.body);
    // let user = new userModel(req.body)
    // user.save().then(() => {
    //     // console.log(user);
    //     console.log("User saved");
    //     res.send({ status: true, message: "user saved successfully" })
    // }).catch((err) => {
    //     console.log("Error creating user", err);
    //     res.send({ status: false, message: "user not saved" })
    // })
    // console.log(req.body);
    const { firstName, phone, email, password } = req.body
    const user = await userModel.findOne({ email })
    console.log(user);
    if (user) {
        res.json({
            message: "Email already exist"
        })
    } else if (!user) {
        let newUser = new userModel({ firstName, phone, email, password })
        console.log(newUser);
       await newUser.save().then(() => {
            // console.log(user);
            console.log("User saved");
            res.send({ status: true, message: "user saved successfully" })
        }).catch((err) => {
            console.log("Error creating user", err);
            res.send({ status: false, message: "user not saved" })
        })
        // console.log(req.body);
    }
}

const login = async (req, res) => {
    let { email, password } = req.body
    userModel.findOne({ email: email }).then(async (user) => {
        if (!user) return res.status(200).json({ message: "Email not found", status: false })
        const correctPass = await compare(password, user.password);
        if (!correctPass) {
            res.status(200).json({ message: "password is incorrect", status: false })
        } else {
            let token = jwt.sign({email}, secret, {expiresIn:"4h"})
            res.status(200).json({ message: 'success', status: true ,token})
        }
    })
        .catch((err) => {
            console.log("error occured", err);
        })
    // console.log(req.body);
}
const dashboard = (req, res) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ status: false, message: "Authorization header missing" });
    }
    let token = req.headers.authorization.split(" ")[1]
    console.log(token);
    jwt.verify(token, secret, ((err, result) => {
        if (err) {
            res.send({ status: false, message: "wrong token" })
        }
        else {
            res.send({ status: true, message: "Success token correct", result })
        }
    }))
};



module.exports = { userWelcome, registerUser, login, dashboard, upload }