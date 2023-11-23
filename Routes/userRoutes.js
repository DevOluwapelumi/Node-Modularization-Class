const express = require("express")
const router = express.Router()
const {userWelcome, registerUser, login,  dashboard, upload, sendMail} = require("../Controllers/userController")

router.get("/welcome", userWelcome)
router.post("/register", registerUser)
router.post("/login", login)
router.post("/upload", upload)
router.post("/dashboard", dashboard)
router.post("/sendmail", sendMail)

module.exports = router;