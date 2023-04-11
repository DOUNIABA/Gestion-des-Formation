import { useState } from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Emlpoyedisplay from './pages/Emlpoyedisplay'
import AddEmployer from './pages/AddEmployer'
import EmployeEdit from './pages/EditEmploye'
import Formationdisplay from './pages/Formationdisplay'
import Formationadd from './pages/AddFormation'
import EditFormations from './pages/EditFormation'
import Organismedisplays from './pages/Organismedisplay'
import AddOrganisme from './pages/AddOrganisme'
import EditOrganismes from './pages/EditOrganisme'
import SessionAdd from './pages/Addsession'
import Sessiondisplays from './pages/Sessiondisplay'
import ProtectRoute from "./ProtectRoutes/ProtectRoute";
import { LoginContext } from "./Contexts/LoginContext";
import Navbar from './components/Navbar'
import Logout from "./components/Logout";
import PageErreur from "./components/PageErreur";

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
      <Route path='/organisme/list' element={<Organismedisplays/>}></Route>
      <Route path='/organisme/addOrganisme' element={<AddOrganisme/>}></Route>
      <Route path="/employe/EmployeEdit/:id" element={<EmployeEdit/>}></Route>
      <Route path='/session/list' element={<Sessiondisplays/>}></Route>
      <Route path='/session/addSession' element={<SessionAdd/>}></Route>
      <Route path='/formation/FormationEdit/:id' element={<EditFormations/>}></Route>
      <Route path='/organisme/OrganismeEdit/:id' element={<EditOrganismes/>}></Route>
      <Route path="*" element={<PageErreur />} />

     </Route>
    </Routes>
   </LoginContext.Provider>
  </BrowserRouter>

  );
}

export default App;
