import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/api/chat",(req,res)=>{
    res.send(chats);
    
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is Connected to Port : ${port}`);
})