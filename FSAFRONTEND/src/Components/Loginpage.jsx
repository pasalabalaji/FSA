import "../assets/Loginpage.css"
import { Link} from "react-router-dom"
import React,{ useState } from "react"
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

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
        const Validateloginuser=(event)=>{
              event.preventDefault();
              console.log(name)
              console.log(password)  
              Cookies.set("username", {name}, { expires: 7,
              sameSite: 'Lax', 
              secure: true});
            //   if(API(name,password)){
            //     navigate('/Body');
            //   }
            //   else{
            //        setMessage("Invalid Credentials")
            //   }
              
            
       }

       return(
             <>
                <div className="login-container">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={Validateloginuser} method="POST">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" onChange={UpdateName} required placeholder="Enter your username" />
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