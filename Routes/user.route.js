const express = require("express")
const router = express.Router()
const {userWelcome } = require("../Controllers/user.controller")

router.get("/welcome", userWelcome)

module.exports = router;