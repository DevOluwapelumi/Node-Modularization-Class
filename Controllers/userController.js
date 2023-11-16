const User = require('../models/userModel');

const userController = {
  signup: async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      const newUser = new User({ fullName, email, password });
      await newUser.save();

      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email, password });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = userController;
