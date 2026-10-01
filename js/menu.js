// menu.js
// Responsabilidade: comportamento do menu (links e botão hambúrguer).
// Não depende de nenhum outro módulo.

export function iniciarMenu() {
  const menu = document.getElementById("menu");
  const btnMenu = document.getElementById("btn-menu");

  // Clique nos links: impede o padrão e deixa o JS conduzir
  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    e.preventDefault();
    location.hash = link.getAttribute("href");
    menu.classList.remove("aberto");
  });

  // Clique no botão hambúrguer: abre e fecha o menu
  btnMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    btnMenu.setAttribute("aria-expanded", aberto);
  });
}