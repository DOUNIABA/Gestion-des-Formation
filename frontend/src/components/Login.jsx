import { useState } from "react";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const Login = () => {
    // const navigate=useNavigate()
    const [errmsg,seterrmsg]=useState(false)
    const [msg,setmsg]=useState(false)
    const [values, setValues] = useState({});
  
    const handleSubmit = async (e)=>{	
		e.preventDefault();
		console.log(values);
		axios.post(`http://localhost:4000/api/auth/login`, values)
		.then(res=>{
			localStorage.setItem("token",res.data)
            
		})
		.catch(error =>{
			console.log(error) 
		})
	}
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    
    </form>
    </div>
  );
};

export default Login;