import multer from "multer"
import { GridFsStorage } from 'multer-gridfs-storage'
import 'dotenv/config'
const username = process.env.DB_USERMANE; 
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb+srv://${username}:${password}@clone-whatsapp.ycnir3i.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    options: {useUnifiedTopology: true , useNewUrlParser: true},
    file: (request,file)=>{
        const match = ["image/png","image/jpg","image/jpeg"];

        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return{
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage});