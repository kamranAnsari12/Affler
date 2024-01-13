import express from "express";
import cors from "cors"
const app=express();
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
app.use(cors());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"



//routes declaration

app.use("/api/v1/users",userRouter);

export {app}