import express from "express";
import http from 'http';
import fs from 'fs';
import path from "path";
// import valores from './script/server.js';
import { router as loginRoutes} from "./routes/login_routes.js";
import { router as eventoRoutes} from "./routes/evento_routes.js";
import { router as agendaProgramacaoRoutes } from "./routes/agenda_programacao_route.js";
import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();


server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs');

server.use('/', loginRoutes)
server.use('/', eventoRoutes)
server.use('/', agendaProgramacaoRoutes)


server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname,'public')))



const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})


