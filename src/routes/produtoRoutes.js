import { Router } from 'express';
import { buscarProdutos, buscarProdutoPorId } from '../controllers/produtoController.js';

const router = Router();

// Rota para listar todos os produtos
router.get("/", buscarProdutos);
// Rota para buscar um produto pelo seu id
router.get("/:id", buscarProdutoPorId);

export default router;