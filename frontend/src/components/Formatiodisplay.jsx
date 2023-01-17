import React from "react";
import { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css";

const style = { width: "auto" };

const Formationdisplays = () => {
  const [Data, setData] = useState([]);
  const data = async () => {
  const formations = await axios.get("http://localhost:8080/api/formation/allformation");
  setData(formations.data);
  };
  useEffect(() => {
    data();
  }, []);

  const remove = async (e) => {
    e.preventDefault();
    const formations = await axios.delete("http://localhost:8080/api/formation/delete",{ id: e.target.value });
    if (formations.data) window.location.reload(false);
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
              Les Formations <hr className="my-2 p-0" />
            </h2>
            <Link to="/fomation/addFormation">
              <button type="submit" className="b " style={style}>
                Nouvelle formation
              </button>
            </Link>
            <table className="table table-bordered">
              <tr className="text-black">
                <th>Formation</th>
                <th>Durée</th>
                <th>Description</th>
                <th>action </th>
                <th></th>
              </tr>

              {Data.map((e) => (
                <tbody>
                  <tr>
                    <td>{e.formation}</td>
                    <td>{e.duree} </td>
                    <td>{e.description}</td>
                    <td>
                      <NavLink to={`/formation/FormationEdit/${e._id}`}>
                        <button className=" b ms-5" style={style}>
                          Modifier
                        </button>
                      </NavLink>
                      <button
                        type="submit"
                        className="b ms-5"
                        onClick={remove}
                        style={style}
                      >
                        Supprimer
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
  );
};

export default Formationdisplays;
