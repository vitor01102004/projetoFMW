const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "bditens",
  port: "3306",
});

// Função para tratamento de erros do banco de dados
function handleDatabaseError(res, err, errorMessage) {
  console.log(err);
  res.status(500).json({ error: errorMessage });
}

app.delete("/item/:id", (req, res) => {
  const { id } = req.params;

  let SQL = "DELETE FROM listaitens WHERE `id` = ?";

  db.query(SQL, [id], (err, result) => {
    if (err) {
      handleDatabaseError(res, err, "Erro ao deletar o item");
    } else {
      let selectSQL = "SELECT * FROM listaitens";
      db.query(selectSQL, (err, result) => {
        if (err) {
          handleDatabaseError(res, err, "Erro ao buscar os itens");
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
});

app.get("/itens", (req, res) => {
  let SQL = "SELECT * FROM listaitens";
  db.query(SQL, (err, result) => {
    if (err) {
      handleDatabaseError(res, err, "Erro ao buscar os itens");
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/item", (req, res) => {
  const { item } = req.body;
  let SQL = "INSERT INTO listaitens (itens) VALUES (?)";

  db.query(SQL, [item], (err, result) => {
    if (err) {
      handleDatabaseError(res, err, "Erro ao adicionar o item");
    } else {
      
      let selectSQL = "SELECT * FROM listaitens";
      db.query(selectSQL, (err, result) => {
        if (err) {
          handleDatabaseError(res, err, "Erro ao buscar os itens");
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando servidor");
});