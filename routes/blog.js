const express = require('express');
const router = express.Router();
const{create,read,getAllBlogsByUser, update, remove}=require('../controllers/blog');
const {requireSignIn} = require("../middlewares/auth");

router.post('/blogs',requireSignIn,create);
router.get('/blogs/:_id',read);
router.get('/blogs/',getAllBlogsByUser);
router.patch('/blogs/:_id',requireSignIn,update)
router.delete('/blogs/:_id',requireSignIn,remove)

module.exports = router