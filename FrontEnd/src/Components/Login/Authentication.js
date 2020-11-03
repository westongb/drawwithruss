  
import React, {createContext, useState} from 'react';

const LoginContext = React.createContext(

  )

function LoginProvider(props){

  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider  value={{user,setUser, loggedIn, setLoggedIn}}>
        {props.children}
    </LoginContext.Provider>

)
}

const LoginConsumer = LoginContext.Consumer
export {LoginContext, LoginConsumer, LoginProvider}