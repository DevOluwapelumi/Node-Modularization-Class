const express = require("express")
const router = express.Router()
const {userWelcome, register, login, logout } = require("../Controllers/user.controller")

router.get("/", userWelcome)
router.get("/api/register", register)
router.get("/api/login", login)
router.get("/api/logout", logout)

module.exports = router;