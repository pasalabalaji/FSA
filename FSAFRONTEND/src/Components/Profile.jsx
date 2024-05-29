// import Cookies from 'js-cookie';
// import { Navbar } from "./Navbar.jsx"
// import { Footer } from "./Footer.jsx"
// import '../assets/Userprofile.css';
// import React, {  useState } from 'react';

 

// export const Profile=()=>{
//         function check(){
//             if(Cookies.get("username")==null){
//                 console.log(1)
//                 return false
//             }
//             else{
//                 return true
//             }
//         }
//        const [msg,setMsg]=useState(check);
//         return(
//             <>
//             {
//                msg ?
//                <>
//                    <Navbar/>

//                 <div className="user-profile">
//                     <div className="user-card">
//                         {/* <div className="user-avatar">
//                             <img src={imagePath} alt="User Avatar" />
//                         </div> */}
//                         <div className="user-info">
//                             <h2 className="user-name"></h2>
//                             <p className="user-id"></p>
//                         </div>
//                     </div>
//                 </div>

//                    <Footer/>
//                </> 
//                :
//                <><h1>Page Restricted</h1></> 
//             }
            
//          </>
//         )
 
// }
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import '../assets/Userprofile.css';

export const Profile = () => {
    const [username, setUsername] = useState('');
    const [uid, setUid] = useState('');
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        const storedUsername = Cookies.get('username');
        const storedUid = Cookies.get('UID');

        if (storedUsername) {
            try {
                const parsedUsername = JSON.parse(storedUsername);
                setUsername(parsedUsername);
            } catch (e) {
                setUsername(storedUsername);
            }
        }

        if (storedUid) {
            try {
                const parsedUid = JSON.parse(storedUid);
                setUid(parsedUid);
            } catch (e) {
                setUid(storedUid);
            }
        }

        setMsg(storedUsername !== null);
    }, []);

    return (
        <>
            {msg ? (
                <>
                    <Navbar />
                    <div className="user-profile">
                        <div className="user-card">
                            <div className="user-info">
                                <h2 className="user-name">Registered mail : {typeof username === 'object' ? username.name : username}</h2>
                                <p className="user-id">Your ID : {typeof uid === 'object' ? uid.UID : uid}</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ) : (
                <h1>Page Restricted</h1>
            )}
        </>
    );
};
