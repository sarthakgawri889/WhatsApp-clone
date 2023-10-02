import mongoose from 'mongoose';
import 'dotenv/config'

const username = process.env.DB_USERMANE;
const password = process.env.DB_PASSWORD;
const Connection = async ()=>{
    const URL = `mongodb+srv://${username}:${password}@clone-whatsapp.ycnir3i.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true});
        console.log("database connected");
    }catch(err){
        console.log('Error while connecting with the database',err.message);
    }
}

export default Connection;