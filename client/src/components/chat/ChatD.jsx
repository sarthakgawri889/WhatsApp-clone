import { Dialog, Box,styled } from '@mui/material'
import {React,useContext} from 'react'
import { AccountContext } from '../context/AccountProvider'
import Menuu from './menu/Menuu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
const Component = styled(Box)`
    display:flex;
`
 
const LeftComponent = styled(Box)`
    min-width:450px;
`

const RightComponent = styled(Box)`
    width:75%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgb(0,0,0,0.14)
`

const dialogueStyle ={
    height: '96%',
    margin: '20px',
    width: '100%',
    borderRadius:'0',
    maxWidth: '100%',
    boxShadow:'none',
    overflow: 'hidden',
    //Drawer API k andr paperProps ka use kr skte h
    // paper props ka use krr skte ho ek object ki trh
}
function ChatD() {
    const {person} = useContext(AccountContext);
  return (
    <>
        <Dialog
        open = {true}
        PaperProps={{sx: dialogueStyle}}
        hideBackdrop={true}
        maxWidth={'md'}
        >
            
        <Component>
            <LeftComponent>
                <Menuu/>
            </LeftComponent>

            <RightComponent> 
                {Object.keys(person).length?<ChatBox/>:<EmptyChat/>}
            </RightComponent>
        </Component>

        </Dialog>
    </>
  )
}

export default ChatD
