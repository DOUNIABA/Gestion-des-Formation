import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditOrganismes() {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const { id } = useParams();
  
  const data = async () => {
    const org = await axios.get(`http://localhost:8080/api/organisme/OneOrganisme/${id}`);
    setData(org.data);
  };
  useEffect(() => {
    data();
  }, []);
  console.log(Data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const org = await axios.put(`http://localhost:8080/api/organisme/update/${id}`,Data);
    if (org.data) navigate('/organisme/list');
  };

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <form className="form-container shadow " onSubmit={handleSubmit} >
      <div className="col-md-12">
          <span>organisme</span>
          <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Employee Name"
          required
          onChange={onChange}
          value={Data.name}
          />
      </div>
      <div className="col-md-12">
          <span>Adresse</span>
          <input
          type="text"
          name="address"
          className="form-control"
          placeholder="Email Employee"
          required
          onChange={onChange}
          value={Data.address}
          />
      </div>
      <button
          type="submit"
          data-testid="submit"
          className=""
          >Save</button>
      </form>      
  </div>
  );
}

export default EditOrganismes;
