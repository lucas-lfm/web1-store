import express from "express";
import 'dotenv/config';
import produtosRouter from './src/routes/produtoRoutes.js';

const PORTA = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello World");
});

app.use("/produtos", produtosRouter);

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`);
});
