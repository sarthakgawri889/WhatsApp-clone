import { Box, Dialog,Typography, List, ListItem, styled} from '@mui/material'
import {React , useContext} from 'react'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../../service/api';

const Component = styled(Box)`
    display: flex;
`

const Container = styled(Box)`
    padding: 56px 0px 56px 56px
`

const QRCode = styled('img')({  //img tag h to usko obj ki trh treat krenge
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-family: inherit;
    font-weight: 300;
    margin-bottom: 25px;
`

const StyledList = styled(List)`
    & > li{
        padding:0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`

//Typography ek p tag deta h by default but hum isko heading 
//m bhi change krr skte h
// style se nhi krr skte dialogue ki css handle 
// to ek object bnaenge

const dialogueStyle ={
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    boxShadow:'none',
    overflow: 'hidden'
    //Drawer API k andr paperProps ka use kr skte h
    // paper props ka use krr skte ho ek object ki trh
}

function LoginDialogue() {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res)=>{
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);  //jisne login kia h yha sbki information h
        //iss information ko database m save krwaa skte h 
        await addUser(decoded);
    }

    const onLoginError = ()=>{

    }

  return (
    
      <Dialog open={true}
       PaperProps={{sx: dialogueStyle}}
       hideBackdrop={true}
      >
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer</Title>
                <StyledList>
                    <ListItem>
                        1. Open WhatsApp on your phone
                    </ListItem>
                       
                    <ListItem>
                        2. Tap Menu Settings and select Linked Devices
                        
                    </ListItem>

                    <ListItem>
                        3. Tap on Link a device
                        
                    </ListItem>
                         
                    <ListItem>
                        4. Point your phone to this screen to capture the QR code
                    </ListItem>
                </StyledList>
            </Container>

            <Box style={{position: 'relative'}}>
                <QRCode src={qrCodeImage} alt='qrcode'/>
                <Box style={{position: 'absolute', top:'50%', transform: 'translatex(25%)'}}>
                   <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                   /> 
                </Box>
            </Box>
        </Component>
      </Dialog>
  
  )
}

export default LoginDialogue
