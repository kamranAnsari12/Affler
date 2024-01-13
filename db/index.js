import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const db=async ()=>
{
    try {
      const ConnectionInstance=  await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
         console.log(` Database MongoDb connected at :${ConnectionInstance.connection.host}`)
    } catch (error) {
        console.log('failed connection to DB',error)
        throw error
        
    }
}
export default db;