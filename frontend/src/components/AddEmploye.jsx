import { Model } from 'mongoose'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const  AddEmploye=()=> {
 
    const [formData,SetformData]=useState([])

    const handleSubmit= async ()=>{
        e.preventDefault();
        const employe=await axios.post('http://localhost:8080/api/employe/createemployes',formData)
        if(employe.data) Navigate('/employe/list')
    }

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <Model>
      <form className="form-container" onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>Nom</span>
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Employee Name"
            required
            value="name"
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
            value="email"
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
            value="email"
            onChange={onChange}
            />
        </div>

        <button
            type="submit"
            data-testid="submit"
            className="text-white bg-dark mt-3 mx-3 px-5 d-flex justify-content-end"
            >Save</button>
        </form>      
</Model>
    </div>
  )
}

export default AddEmploye
