const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.signupControllers=async(req,res)=>{
    const {username,email,password}=req.body;

    try {
        
    const exitUser=await User.findOne({email})
    if(exitUser){
        return res.status(201).json({error:"user alredy signup"})
    }


    const hashPassword=await bcrypt.hash(password, 12)

    const newUser=new User({
        username,
        email,
        password:hashPassword,
    })

    await newUser.save()
    res.status(201).json({message:"signup successfully",newUser})
        
    } catch (error) {
        res.status(500).json({error:"error in signup page"})
        console.log("error",error)
        
    }

    

}

exports.loginControllers=async(req,res)=>{
    const {email,password}=req.body;

  try {

    const user=await User.findOne({email})
    if(!user){
      return res.status(400).json({error:"invalid credential"})
    }

    //password match
    const isMatch=await bcrypt.compare(password, user.password) 

    if(!isMatch){
     return res.status(400).json({error:"password is not match"})
    }
  

    const token=jwt.sign({id:user._id},
      process.env.JWT_ACCESS_SECRET,{
        expiresIn:"1d"
      })

      //for the safety
    //   const cookieOption={
    //     httpOnly:true,
    //     sameSite:"Strict"
    //   }

      res.cookie("token",token)
      res.status(201).json({message:"login successfully",user,token})

  

  } catch (error) {
    res.status(500).json({error:"error in login server"})
    
  }

}

exports.logoutControllers=async(req,res)=>{
    try {
        res.clearCookie("token")
        res.status(201).json({message:"logout successful"})
        
    } catch (error) {
        res.status(500).json({error:"error in logout server",error})
        
    }

}