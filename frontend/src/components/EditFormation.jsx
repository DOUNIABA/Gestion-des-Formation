import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFormation() {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  const { id } = useParams();

  const data = async () => {
    const form = await axios.get(`http://localhost:8080/api/formation/OneFormation/${id}`);
    setData(form.data);
  };
  useEffect(() => {
    data();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = await axios.put(`http://localhost:8080/api/formation/update/${id}`,Data);
    if(form.data) navigate('/formation/list');
  };

  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <form className="form-container shadow " onSubmit={handleSubmit}>
          <div className="col-md-12">
            <span>Formation</span>
            <input
              type="text"
              name="formation"
              className="form-control"
              placeholder="Formation Name"
              required
              onChange={onChange}
              value={Data.formation}
            />
          </div>
          <div className="col-md-12">
            <span>Durée</span>
            <input
              type="text"
              name="duree"
              className="form-control"
              placeholder="Duree Employee"
              required
              onChange={onChange}
              value={Data.duree}
            />
          </div>
          <div className="col-md-12">
            <span>Description</span>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Tele Employee"
              required
              onChange={onChange}
              value={Data.description}
            />
          </div>

          <button type="submit" data-testid="submit" className="">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditFormation;
