const mongoose =require("mongoose")


const promptSchema=mongoose.Schema({

  userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
},

    role:{
        type:String,
        enum:["user","assistant"],
        required:true
    },
     content:{
        type:String,
        required:true
    },
     createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("prompt",promptSchema);