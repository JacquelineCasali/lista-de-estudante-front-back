import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "pg";
import "dotenv/config";
const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// conecção banco de dados

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// rota de leitura
app.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM estudante");
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send(err);
  }
}),
  // cadastrar estudante
  app.post("/", async (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    try {
      await pool.query(
        "INSERT INTO estudante(name, email) VALUES ($1,$2) RETURNING * ",
        [name, email]
      );
      return res.status(200).send({ message: "Estudante cadastrado com sucesso " });
    } catch (err) {
      return res.status(400).send({ message: "Estudante já cadastrado " });
    }
  }),
  // ler um estudante
  app.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const { rows } = await pool.query(
        "SELECT * FROM estudante WHERE id=($1)",
        [id]
      );
      return res.status(200).send(rows);
    } catch (err) {
      return res.status(400).json({ Message: "Error ao iniciar servidor" });
    }
  }),
  // editar
  app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      await pool.query(
        "UPDATE estudante SET name=($1), email=($2) WHERE id=($3) RETURNING * ",
        [name, email, id]
      );
      return res.status(200).send({ msg: "Estudante atulizado com sucesso " });
    } catch (err) {
      return res.status(400).send({ msg: "Estudante já cadastrado " });
    }
  }),
  // deletar

  app.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      await pool.query("DELETE FROM estudante WHERE id=($1)", [id]);
      return res.status(200).send({ msg: "Estudante  Deletado com sucesso " });
    } catch (err) {
      return res.status(400).send(err);
    }
  }),
  // // listando os pets
  app.listen(PORT, () => {
    console.log("Estamos rodando em: http://localhost:" + PORT);
  });
