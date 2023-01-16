import "./App.css"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Employedisplay from './components/Employedisplay'
import Employeadd from './components/AddEmploye'
import Formationdisplay from './components/Formatiodisplay'
import Formationadd from './components/AddFormation'
import Organismedisplay from './components/Organismedisplay'
import Organismeadd from './components/Addorganisme'
import EmployeEdit from './components/EditEmploye'
import Sessiondisplay from './components/Sessiondisplay'
import SessionAdd from './components/AddSession'
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Logout from "./components/Logout";
import ProtectRoute from "./ProtectRoutes/ProtectRoute";
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
     
      <Route element={<ProtectRoute/>}>
      {/* <Route path='' element={<Navbar/>}> */}
      <Route path='/logout' element={<Logout/>}></Route>
    
      <Route path='/employe/list' element={<Employedisplay/>}></Route>
      <Route path='/employe/addEmploye' element={<Employeadd/>}></Route>
      <Route path='/fomation/list' element={<Formationdisplay/>}></Route>
      <Route path='/fomation/addFormation' element={<Formationadd/>}></Route>
      <Route path='/organisme/list' element={<Organismedisplay/>}></Route>
      <Route path='/organisme/addOrganisme' element={<Organismeadd/>}></Route>
      <Route path='/employe/EmployeEdit' element={<EmployeEdit/>}></Route>
      <Route path='/session/list' element={<Sessiondisplay/>}></Route>
      <Route path='/session/addSession' element={<SessionAdd/>}></Route>
     </Route>
     {/* </Route> */}
    </Routes>
  </BrowserRouter>

  );
}

export default App;
