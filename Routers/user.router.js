const express = require ('express')
const {backendSignup, backendLogin} = require ('../Controllers/user.controller')
const router = express.Router()

router.post('/backendsignup', backendSignup)
router.post('/backendlogin', backendLogin)

module.exports = router;