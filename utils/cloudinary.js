
import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
 const uploadoncloudinary= async (localfilepath)=>
 {
    try {
        if(!localfilepath)
        return null;
 const response=await   cloudinary.uploader.upload(localfilepath,{ resource_type:"auto"})
    console.log("file uploaded on cloudinary succesfully , url : ",response.url)
    } catch (error) {
      fs.unlinkSync(localfilepath)
      return null;
        
    }
 }