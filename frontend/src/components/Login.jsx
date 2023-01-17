import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import "../App.css";
import axios from 'axios'

const Login = () => {
    const navigate=useNavigate()
    const [error,seterror]=useState(false)
    const [msg,setmsg]=useState(false)
    const [Data, setData] = useState({});
  
    const handleSubmit = async (e)=>{	
	   e.preventDefault()
       console.log(Data)
        try{
		const user = await axios.post(`http://localhost:8080/api/auth/login`, Data)
			if(user.data){
            localStorage.setItem("token",user.data.token)
            localStorage.setItem("name",user.data.name)
            navigate('/employe/list')
            }
    }catch(error){
			seterror(error.message) 
		}
	}

  const onChange = (e) => {
    setData({...Data, [e.target.name]: e.target.value });
  };
  
  return (

    <div className="App auth fill">
      <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={onChange}
        />
      </div>
      
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={onChange}
        />
      </div>

      <div className="d-grid">
      <button
            type="submit"
            data-testid="submit"
            className=""
            >Save</button>
      </div>
    
    </form>
    </div>
  );
};

export default Login;