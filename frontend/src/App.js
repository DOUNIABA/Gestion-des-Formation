import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Employedisplay from './components/Employedisplay'
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/employe/list' element={<Employedisplay/>}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
