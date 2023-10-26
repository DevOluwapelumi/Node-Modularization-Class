const express = require("express")
const router = express.Router()
const {userWelcome, login, logout, register } = require("../Controllers/user.controller")

router.get("/", userWelcome)
router.post("/api/register", register)
router.post("/api/login", login)
router.post("/api/logout", logout)

module.exports = router;