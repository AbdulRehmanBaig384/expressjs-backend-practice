const express=require('express');
const { usersignup } = require('../Controllers/user');
const router=express.Router();
router.post('/', usersignup)
module.exports=router;