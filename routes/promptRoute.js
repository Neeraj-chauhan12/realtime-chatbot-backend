const express=require("express")
const { sendPrompt } = require("../controllers/promtcontrollers")
const userMiddleware = require("../middlewares/userMiddleware")


const router=express.Router()

router.post("/prompt",sendPrompt)

module.exports=router