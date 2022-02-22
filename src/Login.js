import React, { useState } from 'react'
import './login.css'
import Signin from './Signin';
import Signup from './Signup';


export default function Login(props) {
  const [login,setLoginStyle]=useState("signin");
  function changeStyle(){
    setLoginStyle(preState=>{
        if(preState === "signup"){
            return "signin";
        }
        else{
          return "signup";
        }
    })
  }
  return (
    <div className="login">
             {login ==="signup" ?<Signup data={{changeStyle,loginSuccesfull:props.data.loginSuccesfull}}></Signup> : <Signin data={{changeStyle,loginSuccesfull:props.data.loginSuccesfull}}></Signin>}
    </div>
  )
}
