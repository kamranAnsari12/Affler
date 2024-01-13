import express from "express";
import dotenv from "dotenv";
import db from "./db/index.js";
// const app=express();
import { app } from "./app.js";
dotenv.config(
    {
        path:'./env'
    }
);
db().then(()=> 
{
    app.listen(process.env.PORT,()=>
    { 
        console.log(`connected server ${process.env.PORT}`)
        // console.log(process.env.CLOUDINARY_CLOUD_NAME)
    })
}).catch((error)=>
{
    console.log('failed')
});







/*
const app=express();
(async()=>
{
try {
   await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
    app.on("error",(error)=>
    { 
        console.log("Data Base connection error kamran",error)
    })
    console.log("connected")
    app.listen(process.env.PORT,()=>
    {
        console.log('connect db')
    })
} catch (error) {
    console.log('errror on first')
    console.error(error)
   throw error 
}
})()

*/