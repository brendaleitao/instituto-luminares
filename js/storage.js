// storage.js
// Responsabilidade: ÚNICO arquivo que conhece o localStorage.

const CHAVE = "voluntarios"; // sem "export": fica privada neste módulo

// LER: pega o texto guardado e transforma de volta em array
export function lerVoluntarios() {
  try {
    const texto = localStorage.getItem(CHAVE);
    const dados = texto ? JSON.parse(texto) : [];
    return Array.isArray(dados) ? dados : []; // só aceita lista
  } catch {
    return [];
  }
}

// GRAVAR: transforma o array em texto e guarda (true = deu certo)
export function salvarVoluntarios(lista) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
    return true;
  } catch {
    return false; // armazenamento cheio ou bloqueado
  }
}

// APAGAR: remove todos os voluntários guardados
export function limparVoluntarios() {
  localStorage.removeItem(CHAVE);
}