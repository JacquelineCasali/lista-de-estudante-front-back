import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();
const PORT = process.env.PORT || 5432;

app.use(cors());

// consulta no banco de dados

// // listando os pets
app.listen(PORT, () => {
  console.log("Estamos rodando em: http://127.0.0.1:" + PORT);
});
