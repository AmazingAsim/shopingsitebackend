const express = require('express');
const router = express.Router()
const controller = require('../controller/usercontroller')
router.get('/postuser',controller.postUser)

module.exports = router