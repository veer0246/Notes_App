const express = require('express');
const { registerUser, getAllusers } = require('../controllers/userController');
const { deleteUsers } = require('../controllers/userController');
const { updateUsers } = require('../controllers/userController');
const router = express.Router();


router.post('/register',registerUser)
router.get('/getAllUser',getAllusers)
router.delete('/deleteUser/:_id',deleteUsers)
router.put('/updateUser/:_id', updateUsers)


module.exports = router