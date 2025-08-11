const mongoose=require('mongoose')


const mongodbconnect= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb is connected")
    } catch (error) {
        console.log("mongodb connection error",error)
        
    }

}

module.exports=mongodbconnect;
