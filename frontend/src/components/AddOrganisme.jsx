import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddOrganisme=()=> {
    const navigate= useNavigate()
    const [formData,setformData]=useState([])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const organisme = await axios.post('http://localhost:8080/api/organisme/createorganisme',formData)
        if(organisme.data) 
        navigate('/organisme/list')
        // console.log(organisme.data)
    }
    
    const onChange = (e) => {
      setformData({...formData, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <form className="form-container shadow ms-5 mt-5" onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>organisme</span>
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Employee Name"
            required
            onChange={onChange}
            />
        </div>
        <div className="col-md-12">
            <span>Adresse</span>
            <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Email Employee"
            required
            onChange={onChange}
            />
        </div>
      

        <button
            type="submit"
            data-testid="submit"
            className=""
            >Save</button>
        </form>      
    </div>
  )
}

export default AddOrganisme
