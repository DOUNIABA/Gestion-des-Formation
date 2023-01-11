import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const  addOrganisme=()=> {
    const Navigate=useNavigate()
 
    const [formData,SetformData]=useState([])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const organisme=await axios.post('http://localhost:8080/api/organisme/createorganisme',formData)
        if(organisme.data) Navigate('/organisme/list')
        // console.log(organisme.data)
    }

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
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

export default addOrganisme
