const userModel = require('../Models/user.model')

const userWelcome = (req, res) => {
  res.send([{ Message: "Welcome to Our Website" }]);
};



const register = (req,res)=>{
  let form = new userModel(req.body)
  let data = new userModel({
    fullname:"wale",
    email:"debanjo2@gmail.com",
    username:"vickydev",
    password:"fish",
  })
  console.log(form);
  form.save()
    .then((user) => {
      res.status(201).json({ message: 'User registered successfully' });
      res.send({status:true , message:'User registered successfully'})
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating user' });
        res.send({status:false , message:'Error creating user'})
    });

}

const login = (req, res) => {
  res.send([{ Message: "Not Authorized : No token" }]);
  console.log("Not Authorized : No token" )
};

const logout = (req, res) => {
  res.send([{ Message: "Log out SuccessFully:" }]);
  console.log("Log out SuccessFully:");
};


module.exports = { userWelcome, register, login , logout};