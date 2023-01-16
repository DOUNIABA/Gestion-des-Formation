// import "./App.css"
import { useState } from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Emlpoyedisplay from './pages/Emlpoyedisplay'
import AddEmployer from './pages/AddEmployer'
import Formationdisplay from './components/Formatiodisplay'
import Formationadd from './components/AddFormation'
import Organismedisplay from './components/Organismedisplay'
import AddOrganisme from './components/Addorganisme'
import EmployeEdit from './components/EditEmploye'
import Sessiondisplay from './components/Sessiondisplay'
import SessionAdd from './components/AddSession'
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Logout from "./components/Logout";
import ProtectRoute from "./ProtectRoutes/ProtectRoute";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [value,setValue]=useState("")

  return (

  <BrowserRouter>

   <LoginContext.Provider value={{value,setValue}}>
   <Navbar />

      <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectRoute/>}>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/employe/list' element={<Emlpoyedisplay/>}></Route>
      <Route path='/employe/addEmploye' element={<AddEmployer/>}></Route>
      <Route path='/fomation/list' element={<Formationdisplay/>}></Route>
      <Route path='/fomation/addFormation' element={<Formationadd/>}></Route>
      <Route path='/organisme/list' element={<Organismedisplay/>}></Route>
      <Route path='/organisme/addOrganisme' element={<AddOrganisme/>}></Route>
      <Route path='/employe/EmployeEdit' element={<EmployeEdit/>}></Route>
      <Route path='/session/list' element={<Sessiondisplay/>}></Route>
      <Route path='/session/addSession' element={<SessionAdd/>}></Route>
     </Route>
    </Routes>
   </LoginContext.Provider>
  </BrowserRouter>

  );
}

export default App;
