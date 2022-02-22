import React, { useState } from 'react'
import './login.css'
import Axios from 'axios'

export default function Signin(props) {
  var [mail,setMail]=useState("")
  var [password,setPassword]=useState("")
  var [errorMsg,setMsg]=useState("")
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  function handleSignin(e){
    e.preventDefault();
    if(mail === "" || mail.indexOf("@")<=0){
      setMsg("Invalid Email")
    }
    else if(password===""){
      setMsg("Paasword not valid")
    }
    else{
      setMsg('')
      Axios.post("http://localhost:8080/api/signin",{emailid:mail,password:password},axiosConfig.headers)
      .then(response => {
        if(response.data.error === ''){
              props.data.loginSuccesfull(response.data.userData);
        }
        else{
          setMsg(response.data.error);
        }
      })
    }
  }
  return (
    <div className="p-4 rounded login-box">
        <div className='Row'>
          <div className='Col' >
           <h1>
             Signin
           </h1>
          </div>
        </div>
        <div className='Row'>
          <div className='Col'>
            <form className="form-group p-5 rounded p-sm-4">
                  <div className=" form-group mb-3" >
                    <label htmlFor="mail">User Id</label>
                    <input className='form-control' type="text" name="mail" value={mail} onChange={(e)=>setMail(e.target.value)} />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="passwrod" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  {
                  errorMsg!=""?<div className="form-group mb-3">
                    <span className="text-danger" >{errorMsg}</span>
                  </div>:<></>
                  }
                  <button className="btn btn-primary" type="submit" onClick={handleSignin} >
                    Submit
                  </button>
              </form>
              </div>
          </div>
          <div className='Row'>
                <div className='Col'>
                  Don't have an account ? <a className="switch" onClick={props.data.changeStyle} >Signup</a>
                </div>
          </div>
    </div>
  )
}
