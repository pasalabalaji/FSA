import Cookies from 'js-cookie';
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"
import '../assets/Userprofile.css';
import React, {  useState } from 'react';
 

export const Profile=()=>{
        function check(){
            if(Cookies.get("username")==null){
                console.log(1)
                return false
            }
            else{
                return true
            }
        }
       const [msg,setMsg]=useState(check);
        return(
            <>
            {
               msg ?
               <>
                   <Navbar/>

                <div className="user-profile">
                    <div className="user-card">
                        {/* <div className="user-avatar">
                            <img src={imagePath} alt="User Avatar" />
                        </div> */}
                        <div className="user-info">
                            <h2 className="user-name">User</h2>
                            <p className="user-email">unknown@gmail.com</p>
                            <p className="user-id">ID: User ID</p>
                        </div>
                    </div>
                </div>

                   <Footer/>
               </> 
               :
               <><h1>Page Restricted</h1></> 
            }
            
         </>
        )
 
}