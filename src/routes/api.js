const express=require('express');
const helloController = require("../controllers/helloController");
const router=express.Router();


router.get('/helloget',helloController.hello);
router.post('/hellopost',helloController.helloPost);

module.exports=router;