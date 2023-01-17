import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function EditEmploye() {
const navigate=useNavigate()
const [Data,setData]=useState([])
    
const {id} = useParams()

const data= async ()=>{
    const emp=await axios.get(`http://localhost:8080/api/employe/OneEmployee/${id}`)
    setData(emp.data)
}
useEffect(()=>{
    data();
},[])
const handleSubmit=async (e)=>{
    e.preventDefault();
    const emp=await axios.put(`http://localhost:8080/api/employe/update/${id}`,Data)
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
            required
            onChange={onChange}
            value={Data.name}
            />
        </div>
        <div className="col-md-12">
            <span>Email</span>
            <input
            type="text"
            name="email"
            className="form-control"
            required
            onChange={onChange}
            value={Data.email}
            />
        </div>
        <div className="col-md-12">
            <span>Téléphone</span>
            <input
            type="text"
            name="tele"
            className="form-control"
            required
            onChange={onChange}
            value={Data.tele}
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
