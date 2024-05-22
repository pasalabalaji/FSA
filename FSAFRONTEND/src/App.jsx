import { BrowserRouter,Routes,Route  } from "react-router-dom"
import { Loginpage } from "./Components/Loginpage"
import { Signuppage } from "./Components/Signuppage"
import { Body } from "./Components/Body"
import { Profile } from "./Components/Profile"
import { Userfiles } from "./Components/Userfiles"


function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Loginpage />}/>
               <Route  path="/Loginpage" element={<Loginpage />}/>
               <Route  path="/Signuppage" element={<Signuppage />}/>
               <Route  path="/Body" element={<Body />}/>
               <Route  path="/Profile" element={<Profile />}/>
               <Route  path="/Userfiles" element={<Userfiles />}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
