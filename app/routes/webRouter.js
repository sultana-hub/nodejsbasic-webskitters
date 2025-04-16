

const express=require('express')
const HomeController = require('../controller/HomeController')

const router=express.Router()




router.get('/',HomeController.homePage)



module.exports=router