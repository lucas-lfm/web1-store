import { buscarTodosProdutos, buscarPorId } from "../repositories/produtoRepository.js";

async function buscarProdutos(req, res) {
  const produtos = await buscarTodosProdutos();
  res.json(produtos);
};

async function buscarProdutoPorId(req, res) {
  const id = req.params.id;

  const idConvertido = Number(id);

  if (isNaN(idConvertido)) {
    res.status(400).json({ erro: "ID inválido." });
  }

  const produto = await buscarPorId(idConvertido);

  if (!produto) {
    res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
}

export {
  buscarProdutos,
  buscarProdutoPorId
};
