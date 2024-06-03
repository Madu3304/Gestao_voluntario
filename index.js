import express from "express";
import http from 'http';
import fs from 'fs';
import path from "path";
//import valores from './script/server.js';
import { router as loginRoutes } from "./script/routes/login_routes.js";
import { router as eventoRoutes } from './script/routes/evento_routes.js';
import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();


server.use(express.json());
server.use(express.urlencoded({extended:true}));

//server.use(express.static(path.join(__dirname, 'html')));


// (async () => {
//   console.log(valores.novoEstado)
//   console.log(valores.novoVoluntario)
// })()




server.get("/login", loginRoutes)

server.get("/evento", eventoRoutes)

server.get('/agendaProgramacao', (req,res) => {
  res.sendFile(path.join(__dirname, 'html', 'agenda_programacao.html'));
}) 


server.get('/cancelamento', (req,res) => {
  res.sendFile(path.join(__dirname, 'html', 'cancelamento.html'));
}) 

server.get('/estatistica', (req,res) => {
  res.sendFile(path.join(__dirname, 'html', 'estatistica.html'));
}) 


server.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'html', 'home.html'));
}) 


server.get('/voluntario', (req,res) => {
  res.sendFile(path.join(__dirname, 'html', 'voluntario.html'));
}) 





const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

// http.createServer(function (req, res) {
//   fs.readFile('./html/login.html', function(err, data) {
//     if (err) {
//       res.writeHead(500, {'Content-Type': 'text/plain'});
//       res.write('Erro ao ler o arquivo');
//       return res.end();
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
