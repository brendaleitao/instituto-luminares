// formulario.js
// Responsabilidade: eventos do formulário de cadastro e do botão "Limpar lista".
// Depende de: storage.js, utils.js e templates.js.

import { lerVoluntarios, salvarVoluntarios, limparVoluntarios } from "./storage.js";
import { emailValido } from "./utils.js";
import { listaVoluntariosHTML } from "./templates.js";

export function iniciarFormulario(app) {
  // Digitação no e-mail: feedback em tempo real
  app.addEventListener("input", (e) => {
    if (e.target.id === "email") {
      const ok = emailValido(e.target.value);
      e.target.classList.toggle("valido", ok);
      e.target.classList.toggle("invalido", !ok);
    }
  });

  // Envio do formulário: valida, evita repetidos, guarda e só então confirma
  app.addEventListener("submit", (e) => {
    if (e.target.id !== "form-cadastro") return;
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    const email = e.target.email.value.trim();
    const msg = document.getElementById("mensagem");

    if (nome === "" || !emailValido(email)) {
      msg.textContent = "Preencha o nome e um e-mail válido.";
      msg.className = "erro";
      return;
    }

    const lista = lerVoluntarios();
    const repetido = lista.some(
      (v) => (v.email || "").toLowerCase() === email.toLowerCase()
    );
    if (repetido) {
      msg.textContent = "Este e-mail já está cadastrado.";
      msg.className = "erro";
      return;
    }

    lista.push({ nome, email, criadoEm: new Date().toISOString() });
    if (!salvarVoluntarios(lista)) {
      msg.textContent = "Não foi possível salvar os dados neste navegador.";
      msg.className = "erro";
      return;
    }

    msg.textContent = "Cadastro recebido, " + nome + "!";
    msg.className = "sucesso";
    document.getElementById("lista-voluntarios").innerHTML = listaVoluntariosHTML();
    e.target.reset();
    e.target
      .querySelectorAll("input")
      .forEach((campo) => campo.classList.remove("valido", "invalido"));
  });

  // Botão "Limpar lista"
  app.addEventListener("click", (e) => {
    if (e.target.id === "limpar") {
      limparVoluntarios();
      document.getElementById("lista-voluntarios").innerHTML = listaVoluntariosHTML();
    }
  });
}