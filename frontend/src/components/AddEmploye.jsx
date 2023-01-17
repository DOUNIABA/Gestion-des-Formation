import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../App.css";
const  AddEmploye=()=> {
    const Navigate=useNavigate()
 
    const [formData,SetformData]=useState([])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const employe=await axios.post('http://localhost:8080/api/employe/createemployes',formData)
        if(employe.data) Navigate('/employe/list')
        // console.log(employe.data)
    }

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
      };

  return (
    <div className='w-100 mt-5'>
        <div className='d-flex justify-content-center align-item-center mt-5 '>
             <form className=" form-container shadow  " onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>Nom</span>
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
            <span>Email</span>
            <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email Employee"
            required
            onChange={onChange}
            />
        </div>
        <div className="col-md-12">
            <span>Téléphone</span>
            <input
            type="text"
            name="tele"
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
         
    </div>
  )
}

export default AddEmploye
