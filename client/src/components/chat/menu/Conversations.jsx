import {React,useEffect,useState,useContext} from 'react'
import { getUsers } from '../../../service/api';
import { Box,styled,Divider } from '@mui/material';
import Conversation from './Conversation';
import {AccountContext} from '../../context/AccountProvider';

const Component = styled(Box)`
    height:70vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background:#e9edef;
    opacity:.6;
`

function Conversations({text}) {

    const [users,setUsers] = useState([]); 

    const {account,socket,setActiveUsers} = useContext(AccountContext);

   useEffect(()=>{
     const fetchData = async()=>{
        let response = await getUsers();
        const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredData);
     }  
     fetchData();
   },[text]) // 1st argument hota hai callback function 
   //2nd chiz hai dependency array ki kb call kena hai 
   // ab mrko isko sirf ek baar call krna hai

   useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on("getUsers",users=>{
            setActiveUsers(users);
        })
   },[account])
  return (
    <Component> 
        {
            users.map(users=>(
                users.sub!==account.sub &&
                <>
                    <Conversation user={users}/>
                    <StyledDivider/>
                </>
                
            ))
        }
    </Component>
  )
}

export default Conversations;
