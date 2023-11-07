const mongoose = require('mongoose');
const bcrypt = require('bcrypt');




let appSchema = mongoose.Schema({
    fullname: String,
    username: { type: String, unique: true, required: true }   ,
    phoneNo: String,
    email: {type:String, unique:true, required:true},
    password: String,
})
const saltRound = 10;

appSchema.pre('save', function (next) {
  bcrypt.hash(this.password, saltRound, (err, hash) => {
    if (err) {
      console.log('Unable to hash password', err);
    }
    else {
      this.password = hash;
      console.log(this.password);
      next()
    }
  });
});


appSchema.methods.comparePassword=async function(userPassword){
  try {
    const user = await bcrypt.compare(userPassword, this.password);
    return user;
  } catch (err) {
    console.error(err);
    return false;
  }
  }

const setDatabase = mongoose.model('userDetails', appSchema)
module.exports = setDatabase;