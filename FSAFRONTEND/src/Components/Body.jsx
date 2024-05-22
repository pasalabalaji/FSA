import React, {  useState } from 'react';
import Cookies from 'js-cookie';
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"

import '../assets/Main.css';

export const Body=()=>{
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

       const [receiverId, setReceiverId] = useState('');
       const [selectedFile, setSelectedFile] = useState(null);
     
       const handleReceiverIdChange = (event) => {
         setReceiverId(event.target.value);
       };
     
       const handleFileChange = (event) => {
         setSelectedFile(event.target.files[0]);
       };
     
       const handleSubmit = (event) => {
         event.preventDefault();
         // Here you can implement the logic to send the file to the receiver with ID receiverId
         console.log(`Sending file to ${receiverId}`);
         console.log(selectedFile);
         // Reset form fields after submission
         setReceiverId('');
         setSelectedFile(null);
       };

      return(
               <>
                  {
                     msg ?
                     <>
                         <Navbar/>
                              <div className="file-sharing-container">
                                    
                                    <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                    <label htmlFor="receiverId">Receiver ID:</label>
                                    <input
                                          type="text"
                                          id="receiverId"
                                          value={receiverId}
                                          onChange={handleReceiverIdChange}
                                          required
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="file">Select File:</label>
                                    <input
                                          type="file"
                                          id="file"
                                          onChange={handleFileChange}
                                          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                                          required
                                    />
                                    </div>
                                    <button type="submit">Share File</button>
                                    </form>
                              </div>
                         <Footer/>
                     </> 
                     :
                     <><h1>Page Restricted</h1></> 
                  }
                  
               </>
         )
}