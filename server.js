import express from "express";
const app=express();
app.get('/',(req,res)=>
{
    res.send(`hii`);
})
app.listen(3000,(req,res)=>
{
    console.log(`listing to 3000`)
})