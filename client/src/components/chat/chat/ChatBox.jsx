import {React,useContext, useEffect,useState} from 'react'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../context/AccountProvider' 
import { getConversation } from '../../../service/api'
function ChatBox() {

  const {person,account} = useContext(AccountContext);

  const[conversation,setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      try {
        let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
        // Handle the data or perform other actions with it here
        console.log(data);
        setConversation(data);
      } catch (error) {
        // Handle any errors that might occur during the fetch operation
        console.error("Error fetching conversation:", error);
      }
    };
    getConversationDetails();
  }, [person.sub]);
  

  return (
    <Box style={{height:'75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox
