import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Ler() {
  const { id } = useParams();
  const [estudante, setEstudante] = useState([]);
  useEffect(() => {
    //  banco de dados
  axios.get('https://lista-hesh.onrender.com/'+id)
.then(res=>
  {
    setEstudante(res.data)
    console.log(res)
  }
  )
.catch(err=>console.log(err))
  
   
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Detalhe Estudante</h2>
          <h2>{estudante.id}</h2>
          <h2>{estudante.nome}</h2>
          <h2>{estudante.email}</h2>
        </div>
        <Link to="/" className="btn btn-primary me-2">
          Voltar
        </Link>

        <Link to={`/edit/${estudante.id}`} className="btn btn-info">
          Editar
        </Link>
      </div>
    </div>
  );
}
export default Ler;
