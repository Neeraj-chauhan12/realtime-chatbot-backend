const mongoose=require('mongoose')


exports.mongodbconnection= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB IS CONNECTED")        
    } catch (error) {
        console.log("error in mongodb connection",error)
    }
}