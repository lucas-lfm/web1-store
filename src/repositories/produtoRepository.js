import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arquivo = path.resolve(__dirname, "../database/db.json");

async function lerDados() {
  const conteudo = await readFile(arquivo);

  return JSON.parse(conteudo);
}