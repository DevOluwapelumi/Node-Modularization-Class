const express = require("express");
const app = express();
const env = require('dotenv').config();
const PORT = process.env.PORT
const userRoute = require("./Routes/user.route")


app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})