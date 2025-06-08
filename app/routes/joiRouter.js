const express=require("express")
const JoiController=require('../controller/JoiController')


const router=express.Router()

router.post('/create/data',JoiController.createData)

module.exports=router