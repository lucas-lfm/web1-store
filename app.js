import express from "express";
import 'dotenv/config';
import { buscarProdutos } from './src/controllers/produtoController.js';

const PORTA = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello World");
});

app.get("/produtos", buscarProdutos);

app.get("/produtos/:id", (req, res) => {
  const id = req.params.id;

  const idConvertido = Number(id);

  if (isNaN(idConvertido)) {
    res.status(400).json({ erro: "ID inválido." });
  }

  const produto = produtos.find((p) => p.id === idConvertido);

  if (!produto) {
    res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`);
});
