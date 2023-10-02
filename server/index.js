import express from 'express'
import Connection from './database/db.js';
import cors from 'cors';  //3000 se 8000 p bhjne p error deta hai
import bodyParser from 'body-parser'; // iske  bina pending aayega 
// iskoo pta hi nhi h ki cors api ki body kya chiz hai 
import Route from './route/route.js';
const app = express(); //initialise
app.use(cors());
app.use(bodyParser.json({extended:true})); 
app.use(bodyParser.urlencoded({extended:true}));
// facebook.com/home?query=code%90for%90interview
// isme space m yeh characters daal deta hai usko handle krne k liye 
// url  ko parse krna pdega
app.use('/',Route);
Connection();
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
});
// npm i dotenv se hm password aur username ko  chhupaenge