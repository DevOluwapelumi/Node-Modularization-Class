const setDatabase = require ('../Modals/user.modal')

const backendSignup = (req, res) => {
  console.log('Begin backend for signup');
  console.log(req.body);
    // Check if the request body contains the expected data
    if (!req.body || !req.body.username || !req.body.email || !req.body.password) {
      console.log('Missing data in the request body');
      return res.status(400).send({ status: false, message: "Invalid request data" });
    }  
  let saveUser = new setDatabase(req.body)
  saveUser.save()
    .then(() => {
    console.log(req.body);
    console.log('User saved successfully');
    res.send({ status: false, message: "Successfully signed up" });
  }).catch((err) => {
    console.error('Error occurred', err);
    res.status(500).send({ status: false, message: "Can't sign up" });
  });
};

const backendLogin = (req, res) => {
  console.log('Begin backend for login');
  const { email, password, username } = req.body
  setDatabase.findOne({ email: email }).then(async (user) => {
    console.log(user);
    if (user) {
      try {
        const result = await user.comparePassword(password);
        if (result) {
          console.log('User found');
          console.log(user);
          res.send({ status: true, message: "User found", details: user });
        } else {
          res.send({ status: false, message: "Password does not match" });
        }
      } catch (err) {
        console.log('Error occurred during password comparison:', err);
        res.send({ status: false, message: "Error occurred" });
      }
    } else {
      console.log("User not found");
      res.send({ status: false, message: "User not found" });
    }
  }).catch((err) => {
    console.log('error occur', err);
  });
};



module.exports = {backendSignup, backendLogin}