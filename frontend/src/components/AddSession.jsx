import React, { useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../App.css";


const  AddSession=()=> {
    const Navigate=useNavigate()
    const [employe,setEmploye]=useState([])
    const [form,setForm]=useState([])
    const [formData, SetformData] = useState([]);

    const getEmploye= async ()=>{
        const users=await axios.get('http://localhost:8080/api/employe/allemployes')
        setEmploye(users.data)
        console.log(users.data)
    }
    useEffect(()=>{
        getEmploye();
    },[])

    const getFormation= async ()=>{
        const formations = await axios.get('http://localhost:8080/api/formation/allformation')
        setForm(formations.data)
        console.log(formations.data)
    }
    useEffect(()=>{
        getFormation();
    },[])

    const onChange = (e) => {
        SetformData({...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit= async (e)=>{
        e.preventDefault(); 
        const session= await axios.post(`http://localhost:8080/api/session/createsession`,formData)
        if(session.data) Navigate('/session/list')
        console.log("not add")
    }

  return (
    <div>
      <form className="form-container shadow " onSubmit={handleSubmit} >
        <div className="col-md-12">
        <label>Employé</label>
            <select
            className="form-select"
            name="employe"

            aria-label="Default select example" onChange={onChange}>
                  <option >none</option>
            {
                employe.map(e=>(
                    <option value={e._id}>{e.name}</option>
                ))
            }
        </select>

        </div>
        <div className="col-md-12">
        <label>Formation</label>
            <select
            className="form-select"
            name="formation"
            aria-label="Default select example" onChange={onChange}>
                  <option >none</option>
            {
                form.map(e=>(
                    <option value={e._id}>{e.formation}</option>
                ))
            }
        </select>
        </div>

        <button type="submit" data-testid="submit" className="">Save</button>
        </form>      
    </div>
  )
}

export default AddSession
