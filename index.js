import { config } from "dotenv-safe";
config()
import express from "express";
import http from 'http';
import path from "path";
// import valores from './script/server.js';
import sincronizarBanco from "./script/server.js";
import { authenticateToken } from "./middleware/auth.js";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken"
import cors from "cors"
import bodyParser from "body-parser";
import { verify } from "crypto";


import { router as eventoRoutes} from "./script/routes/evento_routes.js";
import { router as cidadeRoutes} from "./script/routes/cidade_routes.js";
import { router as estadoRoutes } from "./script/routes/estado_routes.js";
import { router as voluntarioRoutes } from "./script/routes/voluntario_routes.js";
import { router as voluntarioEventoRoutes } from "./script/routes/voluntario_evento_routes.js";
import { router as authRoutes } from "./script/routes/auth_routes.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors())
server.use(bodyParser.json())


server.use(express.static(path.join(__dirname, 'views')))

server.get('/login', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'login.html'))
})


// server.use(authenticateToken)

server.get('/agenda', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'agenda.html'))
})

// server.use('/agenda', authenticateToken)

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



server.get('/voluntario', (req,res)=>{
  res.sendFile(path.join(__dirname, 'views', 'html', 'voluntario.html'))
})


server.use(eventoRoutes)
server.use(cidadeRoutes)
server.use(estadoRoutes)
server.use(voluntarioRoutes)
server.use(voluntarioEventoRoutes)
server.use(authRoutes)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})