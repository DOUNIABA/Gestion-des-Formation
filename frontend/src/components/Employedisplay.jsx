import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css";

const style = { width: "auto" };

const Employedisplay = () => {
  const [Data, setData] = useState([]);

  const data = async () => {
    const users = await axios.get('http://localhost:8080/api/employe/allemployes');
    setData(users.data);
    console.log(users.data)
  };
  useEffect(() => {
    data();
  }, []);

  const remove = async (e) => {
    e.preventDefault();
    const employes = await axios.delete(
      "http://localhost:8080/api/employe/delete",{ id: e.target.value });
    if (employes.data) window.location.reload(false);
  };

  return (
    <div className="bg-gray-300 h-screen flex-col">
      <div></div>
      <div className="flex  ">
        <div className="lg:block"></div>
        <div className="m-3 w-100">
          <div></div>
          <div className=" container my-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Les Employés <hr className="my-2 p-0" />
            </h2>

            <Link to="/employe/addEmploye">
              <button type="submit" className="b " style={style}>
                Add Employee
              </button>
            </Link>

            <table className="table table-bordered">
              <tr className="text-black">
                <th>Nom Complet</th>
                <th>Email</th>
                <th>N. Téléphone </th>
                <th>action </th>
              </tr>
              {Data.map((e) => (
                <tbody>
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.email} </td>
                    <td>{e.tele}</td>
                    <td>
                      <NavLink to={`/employe/EmployeEdit/${e._id}`}>
                        <button className=" b ms-5" style={style}>
                          Modifier
                        </button>
                      </NavLink>
                      <button
                        type="submit"
                        className="b ms-5"
                        value={e._id}
                        onClick={remove}
                        style={style}>Supprimer</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employedisplay;
