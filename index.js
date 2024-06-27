import express from "express";
import http from 'http';
import fs, { appendFile } from 'fs';
import path from "path";
import valores from './script/server.js';

import { router as loginRoutes} from "./script/routes/login_routes.js";
import { router as eventoRoutes} from "./script/routes/evento_routes.js";
import { router as agendaProgramacaoRoutes } from "./script/routes/agenda_programacao_route.js";
import { router as agendaRoutes } from "./script/routes/agenda_routes.js";
import { router as cancelamentoRoutes } from "./script/routes/cancelamento_routes.js";
import { router as estatisticaRoutes } from "./script/routes/estatistica_routes.js";
import { router as homeRoutes } from "./script/routes/home_routes.js";
import { router as voluntarioRoutes} from "./script/routes/voluntario_routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname,'/public')))

server.use('/', loginRoutes)
server.use('/', eventoRoutes)
server.use('/', agendaProgramacaoRoutes)
server.use('/', agendaRoutes)
server.use('/', cancelamentoRoutes)
server.use('/', estatisticaRoutes)
server.use('/', homeRoutes)
server.use('/', voluntarioRoutes)


const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})



/* para funcionar meu trem - &&&&  DUDA  &&&&
document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});
*/


