const express = require("express");
const app = express();
const env = require('dotenv').config();
const PORT = process.env.PORT
const cors = require("cors")
const userRoute = require("./Routes/user.route")


app.use(cors())
app.use("/user", userRoute)
app.use("/api/register", userRoute)
app.use("/api/login", userRoute)
app.use("/api/logout", userRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})