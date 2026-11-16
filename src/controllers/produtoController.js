import { buscarTodosProdutos } from "../repositories/produtoRepository.js";

async function buscarProdutos(req, res) {
  const produtos = await buscarTodosProdutos();
  res.json(produtos);
};

export {
  buscarProdutos
};
