const express=require("express")
const { sendPromt } = require("../controllers/promptControllers")
const userMiddleware = require("../middlewares/userMiddleware")


const router=express.Router()

router.post("/promt",userMiddleware,sendPromt)

module.exports=router