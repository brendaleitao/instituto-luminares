// templates.js
// Responsabilidade: montar o HTML de cada página (só devolve texto, não mexe na tela).
// Depende de: storage.js (ler os dados) e utils.js (escapar e formatar).

import { lerVoluntarios } from "./storage.js";
import { escapar, formatarData } from "./utils.js";

// Dados dos projetos sociais
const projetos = [
  { titulo: "Reforço escolar", descricao: "Aulas de apoio para crianças do ensino fundamental." },
  { titulo: "Oficinas de arte", descricao: "Pintura, música e teatro para jovens da comunidade." },
  { titulo: "Horta comunitária", descricao: "Cultivo de alimentos com a participação das famílias." }
];

// Molde de UM card de projeto (privado: sem export)
function criarCard(projeto) {
  return `
    <article class="card">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </article>`;
}

// Molde de UM item da lista de voluntários (privado)
function criarItemVoluntario(v) {
  const data = v.criadoEm
    ? " — cadastrado em " + formatarData(v.criadoEm)
    : "";
  return `<li>${escapar(v.nome)} (${escapar(v.email)})${data}</li>`;
}

// Lista inteira de voluntários, lendo do localStorage
export function listaVoluntariosHTML() {
  const lista = lerVoluntarios();
  if (lista.length === 0) {
    return "<p>Nenhum voluntário cadastrado ainda.</p>";
  }
  return `<ul>${lista.map(criarItemVoluntario).join("")}</ul>`;
}

// As quatro páginas do site
export function paginaInicio() {
  return `<h1>Instituto Luminares</h1><p>Página inicial.</p>`;
}

export function paginaProjetos() {
  const cards = projetos.map(criarCard).join("");
  return `
    <h1>Projetos sociais</h1>
    <div class="lista-cards">${cards}</div>`;
}

export function paginaCadastro() {
  return `
  <h1>Cadastro de voluntário</h1>
  <form id="form-cadastro" novalidate>
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" required>
    <label for="email">E-mail</label>
    <input type="email" id="email" name="email" required>
    <p id="mensagem" role="status"></p>
    <button type="submit">Enviar</button>
  </form>
  <h2>Voluntários cadastrados</h2>
  <div id="lista-voluntarios">${listaVoluntariosHTML()}</div>
  <button type="button" id="limpar">Limpar lista</button>`;
}

export function paginaContato() {
  return `<h1>Contato</h1><p>Fale com a gente.</p>`;
}