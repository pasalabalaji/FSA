import Cookies from 'js-cookie';
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"
import "../assets/Userfiles.css"
import { useState } from 'react'

export const Userfiles=()=>{
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
                            {/* <div className="files-container">
                            {files.map((file, index) => (
                                <div className="file-item" key={index}>
                                <div className="file-info">
                                    <div className="file-name">{file.name}</div>
                                    <div className="file-sender">From: {file.sender}</div>
                                    <div className="file-date">{file.date}</div>
                                </div>
                                <div className="file-actions">
                                    <button className="action-button">Download</button>
                                    <button className="action-button">Delete</button>
                                </div>
                                </div>
                            ))}
                            </div> */}
                                <div className="file-item">
                                <div className="file-info">
                                    <div className="file-name">File1.docx</div>
                                    <div className="file-sender">From: User 1</div>
                                    <div className="file-date">Recieved : Today</div>
                                </div>
                                <div className="file-actions">
                                    <button className="action-button">Download</button>
                                    <button className="action-button">Delete</button>
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