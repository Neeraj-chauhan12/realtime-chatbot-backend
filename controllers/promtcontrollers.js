const Prompt=require('../models/promptmodel')
const OpenAI=require('openai')

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey:process.env.OPEN,
});
console.log(openai.apiKey)

exports.sendPrompt=async(req,res)=>{
    console.log("ready....")
    // const {content}=req.body;
    // const userId=req.userId

    // if(!content || content.trim()===""){
    //     return res.status(400).json({error:"prompt content is require"})
    // }

    // try {

    //     const userPrompt= await Prompt.create({
    //         userId,
    //         role:"user",
    //         content
    //     })

    //       const completion = await openai.chat.completions.create({
    //       messages: [{ role: "user", content: content }],
    //       model: "deepseek-chat",
    //      });
      
         
    //    const aiContent=completion.choices[0].message.content;

    //    const aiMessage=await Prompt.create({
    //     userId,
    //     role:"assistent",
    //     content:aiContent
    //    })

    //     res.status(201).json({reply:aiMessage})
        
    // } catch (error) {
    //     console.log("error in prompt",error)
    //     return res.status(500).json({error:"something went wrong with ai response"})
    // }
}