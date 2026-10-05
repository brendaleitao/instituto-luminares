import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "html/index.html",
        projetos: "html/projetos.html",
        cadastro: "html/cadastro.html",
        contato: "html/contato.html",
        componentes: "html/componentes.html"
      }
    }
  }
});