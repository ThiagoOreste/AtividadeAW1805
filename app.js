var http = require('http');
http.createServer(function(req, res)
{
    res.end("Seja bem-vindo")
}).listen(3000)
console.log("O servidor está em execução!");