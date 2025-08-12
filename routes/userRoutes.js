const express=require("express")
const { signupControllers, loginControllers, logoutControllers } = require("../controllers/usercontrollers")

const router=express.Router()

router.post("/signup",signupControllers)
router.post("/login",loginControllers)
router.get("/logout",logoutControllers)


module.exports=router