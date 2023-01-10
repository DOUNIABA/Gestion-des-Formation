import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../App.css";
const style={width:"auto"}
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
    <div className="bg-gray-300 h-screen flex-col">
      <div>
      </div>
      <div className="flex  ">
        <div className="lg:block">
        </div>
        <div className="m-3 w-100">
          <div>
           
           
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Employés <hr className="my-2 p-0" />
            </h2>

            <button type='submit' className="b " style={style}>
                    Add Employé
                  </button>
        
              <h2><Link to="/auth/manager/plat/add"  className="text-secondary" ><i class="bi bi-plus-circle-fill"></i></Link></h2>
            <table className="table table-bordered">
              <tr className="text-black">
                <th></th>
                <th>name</th>
                <th>Email</th>
                <th>Tele </th>
                <th>action </th>
              </tr>
              {Data.map((e) => (
              <tbody>
                <tr>
                  <th></th>
                  <td>{e.name}</td>
                  <td>{e.cin} </td>
                  <td>{e.tel}</td>
                  <td>
                    <button className="btn  btn-primary  mt-5" >
                    
                    </button>
                  </td>
                </tr>
              </tbody>
                ))}
            </table>
          </div>
      
        
        </div>
      </div>
    </div>
  )
}

export default Employedisplay
