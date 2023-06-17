import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());
// conecção banco de dados
const db = mysql.createConnection({
  user: "root",
  password: "",
  // host: "localhost",
  database: "estudante",
});

// rota de leitura
app.get("/", (req, res) => {
  const sql = "SELECT * FROM estudante";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error ao iniciar servidor" });
    return res.json(result);
  });
});
// cadastrar estudante
app.post("/estudante", (req, res) => {
  const sql = "INSERT INTO estudante(`name`,`email`) VALUES (?) ";
  console.log(req.body);
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.status(200).send({ msg: "Estudante Cadastrado com sucesso " });
  });
});

// ler um estudante
app.get("/:id", (req, res) => {
  const sql = "SELECT * FROM estudante WHERE id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error ao iniciar servidor" });
    return res.json(result);
  });
});

// editar
app.put("/edit/:id", (req, res) => {
  const sql = "UPDATE estudante SET `name`=?,`email`=? WHERE id=?";
  const id = req.params.id;
  db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
    if (err) return res.json({ Message: "Error ao iniciar servidor" });
    return res.json(result);
  });
});

// deletar
app.delete("/:id", (req, res) => {
  const sql = "DELETE FROM `estudante` WHERE id=?";

  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error ao iniciar servidor" });
    return res.json(result);
  });
});
// // listando os pets
app.listen(PORT, () => {
  console.log("Estamos rodando em: http://localhost:" + PORT);
});
