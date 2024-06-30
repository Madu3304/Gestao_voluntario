import express from "express";
import http from 'http';
// import fs, { appendFile } from 'fs';
import path from "path";
import valores from './script/server.js';
import { fileURLToPath } from "url";


import { router as eventoRoutes} from "./script/routes/evento_routes.js";
import { router as cidadeRoutes} from "./script/routes/cidade_routes.js";
import { router as estadoRoutes } from "./script/routes/estado_routes.js";
import { router as voluntarioRoutes } from "./script/routes/voluntario_routes.js";
import { router as voluntarioEventoRoutes } from "./script/routes/voluntario_evento_routes.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express();

server.use(express.static(path.join(__dirname, 'views')))

server.get('/evento', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'evento.html'))
})


server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(eventoRoutes)
server.use(cidadeRoutes)
server.use(estadoRoutes)
server.use(voluntarioRoutes)
server.use(voluntarioEventoRoutes)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})



/* para funcionar meu trem - &&&&  DUDA  &&&&
document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});
*/


