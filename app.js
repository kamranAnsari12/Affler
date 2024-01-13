import express from "express";
const app=express();
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();
app.use(cors());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}