import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Employedisplay = ()=> {

    const [Data,setData]=useState([])

    const data= async ()=>{

        const users=await axios.get('http://localhost:8080/api/employe/allemployes')
        setData(users.data)
    }

    useEffect(()=>{
        data();
    },[])

  return (
    <div>
    <div className=" ms-5 mt-3">
        <h3 className="ms-5">Employees</h3>
        <hr></hr>   
   <div className="container shadow d-flex flex-column justify-content-start tblw ms-5">
   <h2><Link to=""  className="text-secondary" ><i class="bi bi-plus-circle-fill"></i></Link></h2>
    <div className="bg-white mt-3">

     <table className="table table-bordered">
     <thead>
         <tr>
         <th scope="col" className='text-center'>Full Name</th>
         <th scope="col" className='text-center'>Email</th>  
         <th scope="col" className='text-center'>update</th>
         <th scope="col" className='text-center'>delete</th>
         </tr>
     </thead>
     <tbody >
       {
        Data.map((e)=>(
                 <tr key={e._id}>
                 <td>{e.name}</td>
                 <td>{e.email}</td>
                 <td className='text-center'>
                     <button type="submit"  value={e._id}   className="btn btn-primary w-25 h-25 "></button>
                     </td>
                     <td className='text-center'>
                     <button type="submit"  value={e._id}   className=" btn btn-danger w-25 h-25 "></button>
                     </td>
                 </tr>
         ))
       }
     
     </tbody>
     </table>

     </div>
    
 </div>
 </div>
 </div>
  )
}

export default Employedisplay
