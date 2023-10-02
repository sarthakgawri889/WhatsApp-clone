// import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';
import Messenger from './components/Messenger';
function App() {
  const clientId = '472228414892-81jdttf0ai9693c681deqq7gv2irgs7a.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
          <Messenger/>    
          {/* yeh children kehlaega to children ko forward krna pdega */}
      </AccountProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
