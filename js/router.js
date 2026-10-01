// router.js
// Responsabilidade: navegação da SPA (escolher a página e desenhar no #app).
// Depende de: templates.js (para saber o HTML de cada página).

import {
  paginaInicio,
  paginaProjetos,
  paginaCadastro,
  paginaContato
} from "./templates.js";

// Tabela de rotas: caminho -> função que devolve o HTML
const rotas = {
  "/": paginaInicio,
  "/projetos": paginaProjetos,
  "/cadastro": paginaCadastro,
  "/contato": paginaContato
};

// Recebe o elemento #app de fora (não procura no documento sozinho)
export function iniciarRouter(app) {
  function renderizar() {
    const caminho = location.hash.slice(1) || "/";
    const pagina = rotas[caminho];
    app.innerHTML = pagina ? pagina() : `<h1>Página não encontrada</h1>`;
  }

  window.addEventListener("hashchange", renderizar);
  renderizar(); // desenha a página assim que o site abre
}