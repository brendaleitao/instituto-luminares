# Instituto Luminares – Site Institucional

Site institucional desenvolvido para uma ONG fictícia (Instituto Luminares), como projeto de curso. A aplicação é uma SPA (Single Page Application) feita com HTML, CSS e JavaScript puro, sem frameworks. A única biblioteca externa é o Day.js, carregado por CDN.

🌐 **Site publicado:** [instituto-luminares.vercel.app](https://instituto-luminares.vercel.app)

## 🎯 Sobre o projeto
O site apresenta a organização, seus projetos sociais, um cadastro de voluntários e um canal de contato, com foco em estrutura semântica e acessibilidade web.

A navegação entre as páginas acontece sem recarregar o site, por meio de roteamento por hash na URL. O cadastro de voluntários valida os dados, impede e-mails repetidos e guarda a lista no próprio navegador.

## 🖥️ Páginas
- **Início** – apresentação da ONG
- **Projetos Sociais** – ações e iniciativas desenvolvidas
- **Cadastro** – formulário de voluntários, com validação do e-mail em tempo real e lista de cadastrados
- **Contato** – formulário para envio de mensagens

## 🛠️ Tecnologias utilizadas
- **HTML5 semântico** – estrutura das páginas e formulários acessíveis
- **CSS3** – estilos do site em `css/estilos.css`
- **JavaScript (ES Modules)** – roteamento, menu, formulário e templates
- **localStorage** – armazenamento da lista de voluntários no navegador
- **Day.js (CDN)** – formatação de datas na lista de voluntários
- **Vite** – build de produção (minificação de CSS e JS)
- **Vercel** – hospedagem e deploy automático a partir da branch `main`
- **Imagens AVIF/WebP** – com `<picture>` e PNG como alternativa
- **Git e GitHub** – versionamento, branches, pull requests e releases
- **GitFlow, Conventional Commits e versionamento semântico** – organização do fluxo de trabalho

## 📁 Estrutura do projeto
```text
instituto-luminares/
├── css/
│   └── estilos.css      # estilos do site
├── html/                # páginas do site
├── img/                 # imagens utilizadas
├── dist/                # build de produção (gerada, não vai ao Git)
├── js/
│   ├── main.js          # ponto de entrada: liga as peças
│   ├── router.js        # roteamento por hash
│   ├── menu.js          # menu de navegação
│   ├── formulario.js    # eventos do formulário de cadastro
│   ├── templates.js     # geração dinâmica de HTML
│   ├── storage.js       # leitura e gravação no localStorage
│   └── utils.js         # funções utilitárias (ex.: validação de e-mail)
├── package.json         # scripts e dependências de desenvolvimento
├── vercel.json          # configuração do deploy (Vercel)
├── vite.config.js       # configuração do build (Vite)
└── README.md
```

## ✅ Pré-requisitos
- Navegador moderno (Chrome, Edge ou Firefox)
- [Visual Studio Code](https://code.visualstudio.com/) com a extensão **Live Server**
- [Git](https://git-scm.com/) para clonar o repositório

## 🚀 Como executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/brendaleitao/instituto-luminares.git
   ```
2. Abra a pasta `instituto-luminares` no VS Code.
3. Clique com o botão direito em `html/index.html` e escolha **Open with Live Server**.

> O site usa módulos JavaScript, que **não funcionam** ao abrir o arquivo direto no navegador (endereço `file://`). É necessário um servidor local, como o Live Server.

## 📦 Dependências e build
O desenvolvimento com o Live Server **não exige instalar nada**. O **Vite** é usado só para gerar a versão de produção, com CSS, JS e HTML prontos para publicar.

```bash
npm install
npm run build
```

A pasta `dist/` recebe os arquivos otimizados. Para conferir o resultado localmente, use `npm run preview`.

## 🌐 Deploy
O site é publicado na **Vercel** a partir da branch `main`: https://instituto-luminares.vercel.app

| Item | Valor |
|---|---|
| Comando de build | `npm run build` |
| Pasta de saída | `dist` |
| Gatilho | *push* na `main` (deploy automático) |
| Pré-visualização | cada pull request recebe um link de teste |

O arquivo `vercel.json` redireciona a raiz `/` para `html/index.html`, onde fica a SPA. As rotas por hash (`#/projetos`) funcionam sem configuração extra, porque o servidor só recebe `/`.

## 🧪 Testes
O projeto não possui testes automatizados. A verificação é manual:

1. Abra o site com o Live Server e confira o **Console** do navegador (tecla F12): não deve haver erros.
2. Clique em cada link do menu e confira se a página muda sem recarregar.
3. No cadastro, teste um e-mail inválido, um e-mail repetido e um cadastro correto.
4. Recarregue a página e confira se a lista de voluntários continua salva.

## 🔀 Fluxo de trabalho

- `main`: versões estáveis, marcadas com tags (v1.0.0 a v1.2.5).
- `develop`: integração do desenvolvimento contínuo.
- `feature/*`: novas funcionalidades, criadas a partir da `develop`.
- `fix/*`, `docs/*` e `chore/*`: correções, documentação e manutenção, também criadas a partir da `develop`.
- `hotfix/*`: correções urgentes, criadas a partir da `main`.

Os commits seguem Conventional Commits (`feat:`, `fix:`, `docs:`) e as versões seguem o versionamento semântico (MAJOR.MINOR.PATCH). A partir da v1.1.0, toda integração de branch é feita por pull request.

## 👩‍💻 Autora
Desenvolvido por [Brenda Leitão](https://github.com/brendaleitao), durante a graduação em Análise e Desenvolvimento de Sistemas.