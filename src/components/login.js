import React, { useState } from "react";
import './login.css';
import { useNavigate } from "react-router";
import axios from "axios";


export default function Login(){

    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const url="https://book-backend-qvks.onrender.com/login"

    const login=()=>{
          axios.post(url,{
            "username":name,
            "password":password
          }).then((res)=>{
            console.log(res);
            navigate('/books')
          });
    }



    return <div id="login">

        <div id="login-box">
            <br/><br/>
            <h1>MEMBER LOGIN</h1>
            <br/>
            <div>
            <input placeholder="USERNAME" className="log-in" onChange={(e)=>{setName(e.target.value)}}/>
            <br/><br/>
            <input placeholder="PASSWORD" className="log-in" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/><br/>
            <button id="log-btn" onClick={login}>LOGIN</button>
            </div>
            <h4 id="forgot">Forgot Password?</h4>
            <p>new user? signup here</p>
        <button onClick={()=>{navigate('/register')}} id="new">Sign Up</button>

        </div>

    </div>
}