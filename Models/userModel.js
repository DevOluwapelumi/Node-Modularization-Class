const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

let schema = mongoose.Schema({
  firstName: { type: String, require: true },
  phoneo: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true }
});
        
let saltRound = 10

schema.pre("save", function (next){
    bcrypt.hash(this.password, saltRound, (err, hash)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(hash);
            this.password = hash
            next()
        }
    })
})
schema.methods.compareUser = function (userpassword, callback){
    bcrypt.compare(userpassword, this.password, (err, user)=>{
        if(err){
            console.log(err);
        }  
        else{
            console.log(user);
        }
    })
}

let userModel = mongoose.model("user", schema)
module.exports = userModel

