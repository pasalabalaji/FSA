import "../assets/Signuppage.css"
import { Link } from "react-router-dom"
import React,{ useState } from "react"
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Signuppage=()=>{
        const [username,setUsername]=useState(" ");
        const [password,setPassword]=useState(" ");
        const [email,setEmail]=useState(" ");
        const [confirmpassword,setConfirmpassword]=useState(" ");
        const [message,setMessage]=useState(" ");
        const navigate = useNavigate();
        const [items, setItems] = useState([]);

        function UpdateUserame(e){
                 setUsername(e.target.value)

        }

        function UpdateEmail(e){
                 setEmail(e.target.value)
        }
 
        function UpdatePassword(e){
                 setPassword(e.target.value)
        }
         
        function UpdateConfirmPassword(e){
                 setConfirmpassword(e.target.value)
        }

        const handleSubmit = async () => {

            try {
                const response = await axios.post('http://localhost:8080/signup/save', items, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data);
                Cookies.set("username", {username}, { expires: 7,
                    sameSite: 'None', 
                    secure: true});
                navigate('/Body');
            } catch (error) {
                console.error('Error sending items', error);
            }
        };
       const SignupUser=(event)=>{
             event.preventDefault();
             const emailRegex = /^[^\s@]+@(gmail\.com|ac\.in|gov\.in)$/;
             const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{8,}$/;
           
            
            // Username validation
            if (username.length < 8) {
                console.log("working username")
                setMessage("Username must be at least 8 characters long");
            }
            else if (!emailRegex.test(email)) {
                setMessage("Email is not valid");
            }
            else if (!passwordRegex.test(password)) {
                setMessage("Password must contain at least one special character, one uppercase letter, and one digit");
            }
            else if (password !== confirmpassword) {
                setMessage("Passwords do not match");
            }
            else{
                        
                setItems([username,password,email])
                console.log("working...")
                handleSubmit();

            }

       }
       return(
             <>
               <div className="signup-container">
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form onSubmit={SignupUser} method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required onChange={UpdateEmail} placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required onChange={UpdateUserame} placeholder="Choose a username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required onChange={UpdatePassword} placeholder="Enter a password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" required onChange={UpdateConfirmPassword} placeholder="Confirm your password" />
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className="signup-link">
                             <p>Already have an account? <Link to="/">Login</Link></p>
                        </div>
                        <p>
                            {message}
                        </p>
                        </form>
                    </div>
                    </div>
             </>
       )
}