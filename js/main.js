// main.js
// Responsabilidade: apenas ligar as peças. Não tem regra de negócio.

import { iniciarRouter } from "./router.js";
import { iniciarMenu } from "./menu.js";
import { iniciarFormulario } from "./formulario.js";

const app = document.getElementById("app");

iniciarMenu();
iniciarFormulario(app);
iniciarRouter(app);