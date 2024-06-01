import http from 'http';
import fs from 'fs';
import valores from './script/server.js';

(async () => {
  console.log(valores.novoEstado)
  console.log(valores.novoVoluntario)
})()



http.createServer(function (req, res) {
  fs.readFile('./html/login.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write('Erro ao ler o arquivo');
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
