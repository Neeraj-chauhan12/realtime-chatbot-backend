const express=require('express')
const app=express();
const cors=require('cors')
const dotenv=require('dotenv');
const path=require('path');
const { mongodbconnection } = require('./mbconnect');
const userRoute=require('./routes/userRoutes')





dotenv.config()


//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_PORT,
    credentials:true,
    methods:["GET","POST","UPDATE","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}))



//routes
app.use("/user",userRoute)




//mongodb connection and port listening
const PORT=process.env.PORT || 5000
mongodbconnection()    
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})


