const express = require('express');
const router = express.Router();
const{register,login}=require('../controllers/user');

router.post('/users',register);
router.get('/users',login);

module.exports = router