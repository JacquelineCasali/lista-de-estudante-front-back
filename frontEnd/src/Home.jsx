import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios.get('https://estudante-php.onrender.com/')
    axios
      .get(["https://lista-hesh.onrender.com/"])
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // delete
  const handleDelete = (id) => {
    axios
      .delete("https://lista-hesh.onrender.com/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-150 bg-white rounded p-3">
        <h2>Lista de Estudante</h2>
        <div className="d-flex justify-content-end">
          <Link to="/cadastro" className="btn btn-success">
            Cadastrar
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {/* map mostra todos os resultados */}
            {data.map((estudante, index) => {
              return (
                <tr key={index}>
                  <td>{estudante.id}</td>
                  <td>{estudante.nome}</td>
                  <td>{estudante.email}</td>
                  <td>
                    <Link
                      to={`/${estudante.id}`}
                      className="btn btn-sm btn-info"
                    >
                      Ler
                    </Link>

                    <Link
                      to={`/edit/${estudante.id}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(estudante.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
