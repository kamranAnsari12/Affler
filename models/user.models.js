import mongoose, { Schema } from "mongoose";
import { jwt } from "jsonwebtoken";
import bycrypt from "bcrypt";
const userSchema= new mongoose.Schema({
username:{
    required:true,
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:
{
    required:true,
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    
},
fullname:
{
    required:true,
    type:String,
    lowercase:true,
    trim:true,
},
avatar:{
     type:String,
     required:true,

},
coverImage:{
    type:String,
    
},
watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"video"
    }],
 password:
    {
        type:String,
        required:[true,"mandatory"],
        min:[8,"not sufficient"],
        max:[16,"upper limit hit"]
        
    },
refreshToken:{
        type:string
    }

},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {return next();}
    this.password=bycrypt.hash(this.password,16)
    next()
})
userSchema.methods.isPasswordCorrect=async function(password)
{
  return await bycrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function()
{
  return  jwt.sign(
    {
        _id:this._id,
        email:this.email,
       username:this.username,
       fullname:this.fullname
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})

}
userSchema.methods.generateRefreshToken=async function()
{
return jwt.sign({
    _id:this._id,
    email:this.email,
    username:this.username,
    fullname:this.fullname
},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
export const user=mongoose.model("user",userSchema);