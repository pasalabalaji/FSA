// import Cookies from 'js-cookie';
// import { Navbar } from "./Navbar.jsx"
// import { Footer } from "./Footer.jsx"
// import "../assets/Userfiles.css"
// import { useState } from 'react'

// export const Userfiles=()=>{
//         function check(){
//             if(Cookies.get("username")==null){
//                 console.log(1)
//                 return false
//             }
//             else{
//                 return true
//             }
//         }
//         const [msg,setMsg]=useState(check);
//         return(
//             <>
//             {
//                msg ?
//                <>
//                    <Navbar/>
//                             {/* <div className="files-container">
//                             {files.map((file, index) => (
//                                 <div className="file-item" key={index}>
//                                 <div className="file-info">
//                                     <div className="file-name">{file.name}</div>
//                                     <div className="file-sender">From: {file.sender}</div>
//                                     <div className="file-date">{file.date}</div>
//                                 </div>
//                                 <div className="file-actions">
//                                     <button className="action-button">Download</button>
//                                     <button className="action-button">Delete</button>
//                                 </div>
//                                 </div>
//                             ))}
//                             </div> */}
//                                 <div className="file-item">
//                                 <div className="file-info">
//                                     <div className="file-name">File1.docx</div>
//                                     <div className="file-sender">From: User 1</div>
                                    
//                                 </div>
//                                 <div className="file-actions">
//                                     <button className="action-button">Download</button>
//                                     <button className="action-button">Delete</button>
//                                 </div>
//                                 </div>
//                    <Footer/>
//                </> 
//                :
//                <><h1>Page Restricted</h1></> 
//             }
            
//          </>
//         )
// }

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import '../assets/Userfiles.css';

export const Userfiles = () => {
  const [msg, setMsg] = useState(check);
  const [files, setFiles] = useState([]);  // Initialize as an empty array

  function check() {
    return Cookies.get('username') !== null;
  }

  useEffect(() => {
    if (msg) {
      const userCookie = Cookies.get('UID');
      const userObj = JSON.parse(userCookie);
      const uid = userObj.UID;
      fetch('http://localhost:8080/sharefile/getFiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: uid }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Files received from API:', data); // Log the received data
          if (Array.isArray(data)) {
            setFiles(data);
          } else {
            console.error('API response is not an array:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching files:', error);
        });
    }
  }, [msg]);

  return (
    <>
      {msg ? (
        <>
          <Navbar />
          <div className="files-container">
            {files.map((file, index) => (
              <div className="file-item" key={index}>
                <div className="file-info">
                  <div className="file-name">{file.filename}</div>
                  <div className="file-sender">From: {file.senderName}</div> {/* Update to use senderName */}
                </div>
                <div className="file-actions">
                  <button className="action-button">Download</button>
                  <button className="action-button">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      ) : (
        <h1>Page Restricted</h1>
      )}
    </>
  );
};


