import {React,useEffect} from 'react'
import { Box, InputBase,styled } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { uploadFile } from '../../../service/api';
// import MicIcon from '@mui/icons-material/Mic';
import Mic from '@mui/icons-material/Mic';

const Component = styled(Box)`
    height:50px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    & > *{
      margin:5px;
      color:#919191
    }
`;

const Search = styled(Box)`
    background-color:#FFFFFF;
    border-radius:18px;
    width:calc(94% - 100px);
    height: 35px;
`

const InputField = styled(InputBase)`
    width:100%;
    padding:20px;
    height:20px;
    padding-left:25px;
    font-size:14px;
`
const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform:rotate(40deg);
`

function Footer({sendText,setValue,value,file,setFile,setImage}) {

    useEffect(()=>{
        const getImage =async()=>{
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    },[file,setImage])

   const onFileChange = (e)=>{
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
   }

    
  return (
    <Component>
        <EmojiEmotionsOutlinedIcon/>
        <label htmlFor="fileInput">
             <ClipIcon/>
        </label>
        <input
            type="file"
            id="fileInput"
            style={{display: 'none'}}
            onChange={(e)=> onFileChange(e)}
        />
        <Search>
            <InputField
                placeholder='Type a message'
                onChange={(e)=>setValue(e.target.value)}
                onKeyDown={(e)=>sendText(e)}
                value={value}
                // control component 
                
            />
        </Search>
        <Mic/>
    </Component>
  )
}

export default Footer
