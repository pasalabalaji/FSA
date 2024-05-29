import "../assets/Loginpage.css"
import { Link} from "react-router-dom"
import React,{ useState } from "react"
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from "axios";

export const Loginpage=()=>{
        const [name,setName]=useState(" ");
        const [password,setPassword]=useState(" ");
        const [message,setMessage]=useState("");

        const navigate = useNavigate();

        function UpdateName(e){
             setName(e.target.value)
        }
        function UpdatePassword(e){
            setPassword(e.target.value)
       }
        const Validateloginuser=async(event)=>{
              event.preventDefault(); 

              try{
                const response = await axios.post('http://localhost:8080/signup/login', [name,password], {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data)
                if(response.data.length>=1){
                    const UID=response.data;
                    Cookies.set("username", JSON.stringify({name}), { expires: 7,
                        sameSite: 'None', 
                        secure: true});
                    Cookies.set("UID", JSON.stringify({UID}), { expires: 7,
                        sameSite: 'None', 
                        secure: true});
                    navigate('/Body');
                }
                else{
                    setMessage("Enter Valid Credentials And Please Try Later")
                }
              }
              catch(error){
                setMessage("Server Busy...Try Again Later")
              }
                  
       }

       return(
             <>
                <div className="login-container">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={Validateloginuser} method="POST">
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="text" id="username" name="username" onChange={UpdateName} required placeholder="Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={UpdatePassword} required placeholder="Enter your password" />
                        </div>
                        <button type="submit">Login</button>
                        {/* <Link to="/Validate">Login</Link> */}
                        </form>
                        <div className="signup-link">
                        <p>Don't have an account? <Link style={{ textDecoration: 'none' }} to="/Signuppage">Sign Up</Link></p>
                        </div>
                        <p>{ message }</p>
                    </div>
                </div>
             </>
       )
}