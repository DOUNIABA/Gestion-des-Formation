import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../App.css";
const style={width:"auto"}

const Sessiondisplay = ()=> {
    const [Data,setData]=useState([])
    const data = async ()=>{
        const sessions = await axios.get('http://localhost:8080/api/session/allsession')
        setData(sessions.data)
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
          <div className=" container my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Sessions <hr className="my-2 p-0" />
            </h2>

           <Link to="/session/addSession"><button type='submit' className="b" style={style}>Ajouter une Session</button></Link>  
        
            <table className="table table-bordered">
              <tr className="text-black">
                <th>Nom d'Employé</th>
                <th>Formation</th>
              </tr>
              {Data.map((e) => (
              <tbody>
                <tr key={e._id}>
                  <td>{e.employe.name}</td>
                  <td>{e.formation.formation}</td>
                  <td>
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

export default Sessiondisplay
