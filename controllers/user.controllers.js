import { asynchandler } from "../utils/asynchandler.js";
const registerUser=asynchandler(async (req,res)=>
{
  return  res.status(200).json({
    message:"kamran Ansari -New User"
  })
})
export {registerUser}