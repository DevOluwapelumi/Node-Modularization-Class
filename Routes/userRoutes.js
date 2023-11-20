const express = require("express")
const router = express.Router()
const {userWelcome, registerUser, login, uploadfile, dashboard} = require("../Controllers/userController")

router.get("/welcome", userWelcome)
router.post("/register", registerUser)
router.post("/login", login)
router.post("/upload", uploadfile)
router.post("/dashboard", dashboard)

module.exports = router;