// utils.js
// Responsabilidade: funções pequenas e genéricas.
// Não importa nenhum outro arquivo do projeto.

// Protege a página: converte texto digitado pelo usuário em texto seguro
export function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

// Confere se o texto parece um e-mail
export function emailValido(valor) {
  return /^\S+@\S+\.\S+$/.test(valor);
}

// Formata a data. Usa a Day.js (CDN); se ela não carregar, usa o recurso nativo.
export function formatarData(iso) {
  if (typeof dayjs === "undefined") {
    return new Date(iso).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    });
  }
  return dayjs(iso).format("DD/MM/YYYY [às] HH:mm");
}