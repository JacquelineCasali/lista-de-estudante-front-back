import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Editar() {
  const { id } = useParams();
  useEffect(() => {
    // puxando dados do banco
    //  banco de dados
    axios
      .get("https://lista-hesh.onrender.com/" + id)
      .then((res) => {
        console.log(res);

        setValues(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  //  editar
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://lista-hesh.onrender.com/edit/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Editar Estudante</h2>
          <div className="mb-2">
            <label htmlFor="">Nome:</label>

            <input
              className="form-control"
              type="text"
              placeholder="Digite o nome"
              //   monstrando na tela
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email:</label>

            <input
              className="form-control"
              type="email"
              placeholder="Digite o Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Editar</button>
        </form>
      </div>
    </div>
  );
}
export default Editar;
