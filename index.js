import express from "express"
import http from 'http';
import fs from 'fs';
import path from "path";
//import valores from './script/server.js';
//import { router as agenda1Routes} from "./script/routes/agenda1_routes.js";
import { router as loginRoutes } from "./script/routes/login_routes.js";
import { router as eventoRoutes } from './script/routes/evento_routes.js';
import { fileURLToPath } from "url";
import { dirname } from "path";


const server = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

server.use(express.static(path.join(__dirname, 'html')))

server.use(express.json())
server.use(express.urlencoded({extended:true}))

// (async () => {
//   console.log(valores.novoEstado)
//   console.log(valores.novoVoluntario)
// })()




server.get("/login", loginRoutes)

server.get("/evento", eventoRoutes)





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
