const express = require('express')
const AuthEjsController = require("../controller/AuthEjsController")

const AuthCheck=require('../middleware/auth')

const router=express.Router()

router.get("/register",AuthEjsController.registerView)
router.post("/register/create",AuthEjsController.registerCreate)
router.get('/login',AuthEjsController.loginView)
router.post('/login/create',AuthEjsController.loginCreate)
router.get('/user/dashboard',AuthEjsController.userDashboard)
router.get('/logout',AuthEjsController.logout)
module.exports=router