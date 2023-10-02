import {React,useContext,useState,useEffect,useRef} from 'react'
import { Box,styled } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider';
//components
import Footer from './Footer';
import { getMessages, newMessage } from '../../../service/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})
    //background-size:'50%';
`;

const Component = styled(Box)`
    height:75.5vh;
    overflow-y: scroll;
`

const Padd = styled(Box)`
    padding: 7px 10px;
`

function Messages({person,conversation}) {
  const [value, setValue] = useState('');
  const {account,socket,newMessageFlaf,setMessageFlag} = useContext(AccountContext);
  const [messages,setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  
  const[file,setFile] = useState();
  const[image,setImage] = useState();
  const scrollRef = useRef();

  useEffect(()=>{
      socket.current.on('getMessage',data=>{
          setIncomingMessage({
            ...data,
            createdAt: Date.now()
          })
      })
  },[])

  useEffect(()=>{
    const getMessagesDetails = async()=>{
      let data = await getMessages(conversation._id);
      console.log(data);
      setMessages(data);
    }
    conversation._id && getMessagesDetails();
  },[person._id,conversation._id,newMessageFlaf])

  useEffect(()=>{
      scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[messages])

  useEffect(()=>{
    incomingMessage && conversation?.members.includes(incomingMessage.senderId) && 
      setMessages(perv => [...perv,incomingMessage])
  },[incomingMessage,conversation])
 
  const sendText = async(e)=>{
    const code = e.keyCode || e.which;
    console.log(code);
   
    if(code === 13){
      let message;
      if(!file){
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId:conversation._id,
          type:'text',
          text: value
        }
      }else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId:conversation._id,
          type:'file',
          text: image
        }
      }

      socket.current.emit('sendMessage',message)
      
      // console.log(message.senderId)
      await newMessage(message);
      setValue('');
      setMessageFlag(prev=>!prev);
    }
  }

  return (
    <Wrapper>
        <Component>
            {
              messages && messages.map(message=>(
                <Padd ref={scrollRef}>
                    <Message message={message}/>
                </Padd>
                
              ))
            }
        </Component> 
        <Footer sendText={sendText}
            setValue={setValue}
            value={value}
            file = {file}
            setFile = {setFile}
            setImage={setImage}
        />
    </Wrapper>
  )
}

export default Messages
