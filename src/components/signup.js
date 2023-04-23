import React, { useState } from "react";
import './signup.css';
import { useNavigate } from "react-router";
import axios from "axios";



export default function Signup() {


  const naviget=useNavigate();
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setcPassword]=useState('');

  const url="http://localhost:8000/user"

  const signup= ()=>{
    if(password === cpassword && password && name){
      axios.post(url,{
        "username":name,
        "password":password
      }).then((res)=>{
        console.log(res)
      });
      naviget('/');
      alert("signup successful")
    }
    else{
      alert(" enter name and password")
    }
  }

  return <div id="register">
    <div id="reg-box">
      <br /><br />
      <h1>Register</h1>
      <br />
      <div>
        <input className="reg-in" placeholder="Username" onChange={(e)=>{setName(e.target.value)}}/>
        <br /><br/>
        <input className="reg-in" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <br /><br/>
        <input className="reg-in" placeholder="Confirm Password" onChange={(e)=>{setcPassword(e.target.value)}}/>
        <br /><br/>
        <button id="reg-btn" onClick={signup}>REGISTER</button>
      </div>
      <h4 id="mem-log" onClick={()=>{naviget('/')}}>Member login</h4>
    </div>
  </div>
}