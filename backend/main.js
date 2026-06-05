import { GoogleGenAI ,ThinkingLevel } from "@google/genai";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app=express();

const ai = new GoogleGenAI({apiKey:process.env.api_key});

app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
}));

app.use(express.urlencoded({extended:true}));

app.post("/api/content",async (req,res)=>{
  
  
    try{
      const history=req.body.history;
      console.log(history);

        // const {question}=req.body;
        // console.log(question)
 const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
     contents: history
  // config: {
  //     thinkingConfig: {
  //       thinkingLevel: ThinkingLevel.LOW,
  //     },
  //   }
  });
  const text = response.candidates[0].content.parts[0].text;

    res.json({
      role: "model",
      parts: [{ text }]
    });
}
catch (err) {
    res.status(500).json({ error: "AI error" });
  }
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

// await main();