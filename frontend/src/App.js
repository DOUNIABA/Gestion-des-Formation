import "./App.css"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Employedisplay from './components/Employedisplay'
import Employeadd from './components/AddEmploye'
import Formationdisplay from './components/Formatiodisplay'
import Formationadd from './components/AddFormation'
import Organismedisplay from './components/Organismedisplay'
import Organismeadd from './components/AddOrganisme'
import EmployeEdit from './components/EditEmploye'
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/employe/list' element={<Employedisplay/>}></Route>
      <Route path='/employe/addEmploye' element={<Employeadd/>}></Route>
      <Route path='/fomation/list' element={<Formationdisplay/>}></Route>
      <Route path='/fomation/addFormation' element={<Formationadd/>}></Route>
      <Route path='/organisme/list' element={<Organismedisplay/>}></Route>
      <Route path='/organisme/addOrganisme' element={<Organismeadd/>}></Route>
      <Route path='/employe/EmployeEdit' element={<EmployeEdit/>}></Route>

    </Routes>
  </BrowserRouter>

  );
}

export default App;
