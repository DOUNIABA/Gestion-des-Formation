import React, { useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import moment from "moment";
import axios from 'axios'

const  AddSession=()=> {
    const navigate=useNavigate()
    const [value, setValue] = useState(moment().format('YYYY-MM-DD'));
    const [employe,setEmploye]=useState([])
    const [form,setForm]=useState([])
    const [formData, SetformData] = useState({
        employe: "",
        formation: "",
        date_debut: "",
        date_fin:"",
      });

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

    const onChangeDate = (e) => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setValue(newDate);
        console.log(newDate); 
      };

    const handleSubmit= async (e)=>{
       e.preventDefault(); 
        const session= await axios.post(`http://localhost:8080/api/session/createsession`,formData)
        if(session.data) navigate('/session/list')
        console.log("not add")
    }

  return (
    <div>
      <form className="form-container shadow ms-5 mt-5" onSubmit={handleSubmit} >
        <div className="col-md-12">
        <label>Employé</label>
            <select
            className="form-select"
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
            aria-label="Default select example" onChange={onChange}>
                  <option >none</option>
            {
                form.map(e=>(
                    <option value={e._id}>{e.formation}</option>
                ))
            }
           
        </select>
        
        </div>
           
        <div className="col-md-12">
            <span>Date de Début</span>
            <input
            type="Date"
            name=" date_debut"
            className="form-control"
            required
            onChange={onChangeDate}
            value={value}
            />
        </div>
        <div className="col-md-12">
            <span>Date de Fin</span>
            <input
            type="Date"
            name="date_fin"
            className="form-control"
            required
            onChange={onChangeDate}
            value={value}
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

export default AddSession
