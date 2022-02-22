import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import Axios from 'axios';
export default function Signup(props) {
  var data=require('./city.json');
  var [city,setCity]=useState([])
  var [errorMsg,setMsg]=useState("")
  var id=1;
  var [name,setName]=useState("")
  var [mail,setMail]=useState("")
  var [password,setPassword]=useState("")
  var [confirmPassword,setConfirmPassword]=useState("")
  var [dob,setDob]=useState("")
  var [location,setLocation]=useState("Ahmedabad")
  useEffect(()=>{
   var tempCity=[]
   data.map(item=>{
     if(item.state==="Gujarat"){
       tempCity=[...tempCity,{id:id++,name:item.name}]
     }
   })
   setCity(tempCity);
  },[])
  function handleSignup(e){
    e.preventDefault();
    if(mail === "" || mail.indexOf("@")<=0){
      setMsg("Invalid Email")
    }
    else if(name === "" || !isNaN(name)){
      setMsg("Name can not be empty and must contain ateleast one english alphabet")
    }
    else if(password!==confirmPassword){
      setMsg("Paaswords Does not match")
    }
    else{
      setMsg("")
      Axios.post("http://localhost:8080/signup",{name:name,email:mail,dob:dob,password:password,location:location})
      .then( (response) => {
            if(response.data.error === ''){
              let userData={name,mail,password,location,dob}
              props.data.loginSuccesfull(userData);
            }
            else{
              setMsg(response.data.error);
            }
      })
    }
  }
  return (
    <div className="p-4 rounded login-box">
           <div className="p-4 signup rounded">
        <div className='Row'>
          <div className='Col' >
           <h1>
             Signup
           </h1>
          </div>
        </div>
        <div className='Row'>
          <div className='Col'>
            <form className="form-group p-5 rounded p-sm-4" >
                  <div className=" form-group mb-3" >
                    <label htmlFor="Emailid">Email Id</label>
                    <input className='form-control' type="email" name="Emailid" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                  </div>
                  <div className=" form-group mb-3" >
                    <label htmlFor="name">Name</label>
                    <input className='form-control' type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className=" form-group mb-3" >
                    <label htmlFor="name">Date Of Birth</label>
                    <input className='form-control' type="date" name="dob" value={dob}  onChange={(e)=>setDob(e.target.value)}/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="city">City</label>
                    <select className='form-select' value={location} onChange={(e)=>setLocation(e.target.value)}>
                      {
                        city.map(item=>{
                          return <option key={item.id}>{item.name}</option>
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input className='form-control' type="password" name="confirmpassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  </div>
                  {
                  errorMsg!=""?<div className="form-group mb-3">
                    <span className="text-danger" >{errorMsg}</span>
                  </div>:<></>
                  }
                  <button className="btn btn-primary" type="submit" onClick={handleSignup} >
                    Submit
                  </button>
              </form>
              </div>
          </div>
          <div className='Row'>
                <div className='Col'>
                  Don't have an account ? <a className="switch" onClick={props.data.changeStyle} >Signin</a>
                </div>
          </div>
        </div>
    </div>
  )
}
