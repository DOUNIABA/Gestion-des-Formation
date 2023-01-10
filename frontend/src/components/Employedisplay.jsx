import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function Employedisplay() {
  
  const [Data,setData]=useState([])

  const data = async ()=>{
    const users=await axios.get('http://localhost:8080/api/employe/allemployes')
    setData(users.data)
    console.log(users)
  }
  useEffect(()=>{
    data();
  },[])
  console.log(Data)
  
    return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">email</th>
      <th scope="col">Operations</th>
 
    </tr>
  </thead>
  <tbody>
    {
        Data.map((e)=>(
      <tr key={e._id}>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td className='text-center'>
                        <button type="submit"  className="btn btn-primary w-25 h-25 "></button>
                        </td>
                        <td className='text-center'>
                        <button type="submit"  className=" btn btn-danger w-25 h-25 "></button>
                        </td>
    </tr>
        
    ))
   
    }
  
  </tbody>
</table>
    </div>
  )
}

export default Employedisplay
