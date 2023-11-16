const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config(); // Add this line to load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use process.env.PORT

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

console.log('MongoDB URI:', mongoURI);


(async () => {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  })();

// Routes
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection URI (replace 'your_connection_string' with your MongoDB connection string)
// const mongoURI = 'mongodb+srv://pelumi:pelumi123@cluster0.qiildcr.mongodb.net/Module_db?retryWrites=true&w=majority';

// let db; // Database connection reference

// // Connect to MongoDB
// MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//   } else {
//     console.log('Connected to MongoDB');
//     db = client.db(); // Set the database reference
//   }
// });

// // Temporary storage for user data (in-memory)
// const users = [];

// // Signup endpoint
// app.post('/signup', async (req, res) => {
//   const { fullName, email, password } = req.body;

//   try {
//     // Check if the user with the given email already exists in MongoDB
//     const existingUser = await db.collection('users').findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: 'User with this email already exists' });
//     }

//     // Store the user data in MongoDB
//     await db.collection('users').insertOne({ fullName, email, password });

//     res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Login endpoint
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user with the given email and password exists in MongoDB
//     const user = await db.collection('users').findOne({ email, password });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






// const express = require ('express')
// const mongoose = require ('mongoose')
// const cors = require ('cors')
// const app = express()
// const env = require('dotenv').config()
// const userRouter = require("./Routers/user.router")
// PORT=process.env.PORT||5000
// URI=process.env.URI

// mongoose.connect(URI).then(()=>{
//     console.log('App connected to database successfully');
// }).catch((err)=>{
//     console.log("Erorr occour while connecting to database", err);
// })

// app.use(cors())
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// // app.use(express.json({ limit: '10mb' }))
// app.use('/user', userRouter)

// app.listen(PORT, (req, res)=>{
//     console.log('Server begin at PORT', PORT);
// })
