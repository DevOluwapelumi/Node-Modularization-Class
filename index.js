const express = require("express");
const app = express();
const dotenv = require('dotenv')
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoute = require("./Routes/user.route");

dotenv.config();

const PORT = process.env.PORT || 5500
connectDB()
app.use(cors())
app.use("/user", userRoute)
app.use("/api/register", userRoute)
app.use("/api/login", userRoute)
app.use("/api/logout", userRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})