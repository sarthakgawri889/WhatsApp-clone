import { React, useContext } from "react";
import LoginDialogue from "./account/LoginDialogue";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "./context/AccountProvider";
import ChatD from "./chat/ChatD";


const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

function Messenger() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {account ? (
            <>
             <Header>
                <Toolbar></Toolbar>
             </Header> 
             <ChatD/>
            </>
            
          
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <div>
              <LoginDialogue />
            </div>
          </>
        )}
      </Component>
    </>
  );
}

export default Messenger;
