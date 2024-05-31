// import React, {  useState } from 'react';
// import Cookies from 'js-cookie';
// import { Navbar } from "./Navbar.jsx"
// import { Footer } from "./Footer.jsx"
// // import axios from 'axios';

// import '../assets/Main.css';

// export const Body=()=>{
//       function check(){
//             if(Cookies.get("username")==null){
//                   console.log(1)
//                   return false
//             }
//             else{
//                   return true
//             }
//       }

//       const storedUid = Cookies.get('UID');
//       const [uid,setUid] = useState('');
//       console.log(storedUid);
//       if (storedUid) {
//             try {
//                 const parsedUid = JSON.parse(storedUid);
//                 setUid(parsedUid);
//             } catch (e) {
//                 setUid(storedUid);
//             }
//         }
//        const [msg,setMsg]=useState(check);
//       //  const [message,setMessage]=useState(" ");
//        const [receiverId, setReceiverId] = useState('');
//        const [selectedFile, setSelectedFile] = useState(null);
     
//        const handleReceiverIdChange = (event) => {
//          setReceiverId(event.target.value);
//        };
     
//        const handleFileChange = (event) => {
//          setSelectedFile(event.target.files[0]);
//        };
     
//        const handleSubmit = async (event) => {
//          event.preventDefault();
//       //    try{
//       //       // const response = await axios.post('http://localhost:8080/sharefile/share', [uid,receiverId,selectedFile], {
//       //       //       headers: {
//       //       //           'Content-Type': 'application/json',
//       //       //       },
//       //       // });
//       //       // if(response.data==1){
//       //       //       setMessage("worked");   
//       //       // }
//       //       // else{
//       //       //       setMessage("not worked");   
//       //       // }
//       //    }catch (error) {
//       //       setMessage('Error sending items', error);
//       //   }

//          console.log(`Sending file to ${receiverId}`);
//          console.log(selectedFile);
//          // Reset form fields after submission
//          setReceiverId('');
//          setSelectedFile(null);
//        };

//       return(
//                <>
//                   {
//                      msg ?
//                      <>
//                          <Navbar/>
//                               <div className="file-sharing-container">
                                    
//                                     <form onSubmit={handleSubmit}>
//                                     <div className="form-group">
//                                     <label htmlFor="receiverId">Receiver ID:</label>
//                                     <input
//                                           type="text"
//                                           id="receiverId"
//                                           value={receiverId}
//                                           onChange={handleReceiverIdChange}
//                                           required
//                                     />
//                                     </div>
//                                     <div className="form-group">
//                                     <label htmlFor="file">Select File:</label>
//                                     <input
//                                           type="file"
//                                           id="file"
//                                           onChange={handleFileChange}
//                                           accept=".pdf,.doc,.docx,.txt,.jpg,.png"
//                                           required
//                                     />
//                                     </div>
//                                     <button type="submit">Share File</button>
//                                     {/* {message} */}
//                                     </form>
//                               </div>
//                          <Footer/>
//                      </> 
//                      :
//                      <><h1>Page Restricted</h1></> 
//                   }
                  
//                </>
//          )
// }
// import React, { useState, useEffect, useMemo } from 'react';
// import Cookies from 'js-cookie';
// import { Navbar } from "./Navbar.jsx";
// import { Footer } from "./Footer.jsx";
// import axios from 'axios';

// import '../assets/Main.css';

// export const Body = () => {
//   const check = useMemo(() => {
//     return Cookies.get("username") != null;
//   }, []);

//   const storedUid = Cookies.get('UID');
//   const [uid, setUid] = useState('');
//   const [msg, setMsg] = useState(check);
//   const [message, setMessage] = useState(" ");
//   const [receiverId, setReceiverId] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     if (storedUid) {
//       try {
//         const parsedUid = JSON.parse(storedUid);
//         setUid(parsedUid);
//       } catch (e) {
//         setUid(storedUid);
//       }
//     }
//   }, [storedUid]);

//   const handleReceiverIdChange = (event) => {
//     setReceiverId(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//        try{
//           const response = await axios.post('http://localhost:8080/sharefile/share', [uid,receiverId,selectedFile], {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//           });
//           if(response.data==1){
//                 setMessage("worked");   
//           }
//           else{
//                 setMessage("not worked");   
//           }
//        }catch (error) {
//           console.log(error);
//           setMessage('Error sending items', error);
//       }

//     console.log(`Sending file to ${receiverId}`);
//     console.log(selectedFile);
//     // Reset form fields after submission
//     setReceiverId('');
//     setSelectedFile(null);
//   };

//   return (
//     <>
//       {msg ? (
//         <>
//           <Navbar />
//           <div className="file-sharing-container">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="receiverId">Receiver ID:</label>
//                 <input
//                   type="text"
//                   id="receiverId"
//                   value={receiverId}
//                   onChange={handleReceiverIdChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="file">Select File:</label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx,.txt,.jpg,.png"
//                   required
//                 />
//               </div>
//               <button type="submit">Share File</button>
//               {message}
//             </form>
//           </div>
//           <Footer />
//         </>
//       ) : (
//         <h1>Page Restricted</h1>
//       )}
//     </>
//   );
// };

import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'js-cookie';
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import axios from 'axios';

import '../assets/Main.css';

export const Body = () => {
  const check = useMemo(() => {
    return Cookies.get("username") != null;
  }, []);

  const storedUid = Cookies.get('UID');
  const [uid, setUid] = useState('');
  const [msg, setMsg] = useState(check);
  const [message, setMessage] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

useEffect(() => {
      if (storedUid) {
        try {
          const parsedUid = JSON.parse(storedUid);
          setUid(parsedUid.UID); // Extract the UID value
        } catch (e) {
          // Handle parsing error
          console.error("Error parsing UID:", e);
        }
      }
    }, [storedUid]);

  const handleReceiverIdChange = (event) => {
    setReceiverId(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!uid || !receiverId || !selectedFile) {
      setMessage('Please fill all the fields and select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('uid', uid);
      formData.append('receiverId', receiverId);
      formData.append('file', selectedFile);
      console.log(storedUid);
      const response = await axios.post('http://localhost:8080/sharefile/share', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data === 1) {
        setMessage('File shared successfully.');
      } else {
        setMessage('Failed to share file.');
      }
    } catch (error) {
      setMessage(`Error sending items: ${error.response ? error.response.data : error.message}`);
    }

    console.log(`Sending file to ${receiverId}`);
    console.log(selectedFile);
    // Reset form fields after submission
    setReceiverId('');
    setSelectedFile(null);
  };

  return (
    <>
      {msg ? (
        <>
          <Navbar />
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
              {message && <p>{message}</p>}
            </form>
          </div>
          <Footer />
        </>
      ) : (
        <h1>Page Restricted</h1>
      )}
    </>
  );
};
