import express from "express";
const app=express();
import dotenv from 'dotenv';
dotenv.config();
app.get('/',(req,res)=>
{
    res.send(`hii`);
})
app.listen(3000,(req,res)=>
{
    console.log(`sdf$}`)
})