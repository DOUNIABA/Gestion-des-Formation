import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditEmploye() {
const navigate=useNavigate()
const [Data,setData]=useState([])


const handleSubmit=async (e)=>{
    e.preventDefault();
    const emp=await axios.put('http://localhost:8080/api/employe/update/${id}',Data)
    if(emp.data) navigate('/employe/list')}

    const onChange=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
    }

    
  return (
    <div>
          <div>
      <form className="form-container shadow ms-5 mt-5" onSubmit={handleSubmit} >
        <div className="col-md-12">
            <span>Nom</span>
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Employee Name"
            required
            onChange={onChange}
            value={name}
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
            value={email}
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
            value={tele}
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

export default EditEmploye
