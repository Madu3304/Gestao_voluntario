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


server.get('/agenda', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'agenda.html'))
})

server.get('/cancelamento', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'cancelamento.html'))
})

server.get('/estatistica', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'estatistica.html'))
})

server.get('/evento', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'evento.html'))
})

server.get('/home', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'home.html'))
})

server.get('/login', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'login.html'))
})

server.get('/voluntario', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'voluntario.html'))
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





