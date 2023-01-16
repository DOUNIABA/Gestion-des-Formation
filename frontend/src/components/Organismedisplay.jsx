import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../App.css";
const style={width:"auto"}
const Organismedisplay = ()=> {

    const [Data,setData]=useState([])
    const data= async ()=>{
        const organismes=await axios.get('http://localhost:8080/api/organisme/allorganisme')
        setData(organismes.data)
    }

    useEffect(()=>{
        data();
    },[])

    const remove= async (e)=>{
      e.preventDefault()
      const organismes=await axios.delete('http://localhost:8080/api/organisme/delete',{id:e.target.value})
      if(organismes.data) window.location.reload(false);
    }


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
              Les Organismes <hr className="my-2 p-0" />
            </h2>

           <Link to="/organisme/addOrganisme"><button type='submit' className="b " style={style}>Nouvelle Organisme</button></Link>  
        
            <table className="table table-bordered">
              <tr className="text-black">
                <th>name</th>
                <th>address</th>
                <th>action </th>
              </tr>

              {Data.map((e) => (
              <tbody>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.address} </td>
                  <td>
                    <div className='ms-5'>
                        <button type='submit' className="b " style={style}>Modifier</button>
                        <button type='submit' className="b ms-5" onClick={remove} style={style}>Supprimer</button>
                    </div>

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

export default Organismedisplay
