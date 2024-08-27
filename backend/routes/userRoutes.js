const express = require('express');
const { registerUser, getAllusers } = require('../controllers/userController');
const { deleteUsers } = require('../controllers/userController');
const router = express.Router();


router.post('/register',registerUser)
router.get('/getAllUser',getAllusers)


module.exports = router