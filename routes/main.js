const {signup} = require("../services/sign");
const {login} = require("../services/login");
const asyncHandler = require('express-async-handler');
const {protect} = require("../services/protect");

const router=require('express').Router()



//sign up
router.post('/api/signup',signup)
//sign in
router.post('/api/login',login)





//crud book
const book=require('../services/Book')
//create book
router.post('/api/createbook',protect,book.createOne);
//find byId
router.post('/api/findone/:id',protect,book.findById);
//delete byId
router.post('/api/deleteone/:id',protect,book.deleteById);
//updatebyId
router.post('/api/updateone/:id',protect,book.updateById);

module.exports=router;