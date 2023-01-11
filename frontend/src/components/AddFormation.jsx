import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const  AddEmploye=()=> {
    const Navigate=useNavigate()
 
    const [formData,SetformData]=useState([])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const formation=await axios.post('http://localhost:8080/api/formation/createformation',formData)
        if(formation.data) Navigate('/fomation/list')
        // console.log(formation.data)
    }

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <form className="form-container shadow ms-5 mt-5" onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>Formation</span>
            <input
            type="text"
            name="formation"
            className="form-control"
            placeholder="Employee Name"
            required
            onChange={onChange}
            />
        </div>
        <div className="col-md-12">
            <span>Durée</span>
            <input
            type="text"
            name="duree"
            className="form-control"
            placeholder="Email Employee"
            required
            onChange={onChange}
            />
        </div>
        <div className="col-md-12">
            <span>Description</span>
            <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Tele Employee"
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

export default AddEmploye
