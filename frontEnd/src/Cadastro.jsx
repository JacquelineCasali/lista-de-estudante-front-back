import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cadastro() {
  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "green",
  };
  // criar cadastro
  const [values, setValues] = useState({
    nome: "",
    email: "",
  });
  const navigate = useNavigate();
  const [message,setMessage]=useState('');
  const handleValidation = () => {
    const {nome,email  } = values;
    if (nome === "") {
      //campo nao pode ser vazio
      toast.error("Por favor, preencha seu nome", toastOptions);
      return false;
    } else if (email === "") {
      // campo nao pode ser vazio
      toast.error("Por favor, preencha seu email", toastOptions);
      return false;
    }

    return true;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {

    axios
      .post("https://lista-hesh.onrender.com/", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => setMessage(err.response.data.message));
  }
};
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      
      
      {
      
      message?<p>
          
          {message}</p>: ""}
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar Estudante</h2>
          <div className="mb-2">
            <label htmlFor="">Nome:</label>

            <input
              className="form-control"
              type="text"
              placeholder="Digite o nome"
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email:</label>

            <input
              className="form-control"
              type="email"
              placeholder="Digite o Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Cadastrar</button>
        </form>
        <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />
      </div>
    </div>
  );
}
export default Cadastro;
