const express = require('express');
const app = express();

app.listen(3000, function(){
   console.log("Servidor rodando na porta 3000");
})

// criando a rota raiz
app.get("/", function(rec, res){
    res.send("<h3>Seja bem vindo ao meu site</h3>");

})

app.get('sobre', function(req, res){
    res.end('Páginas sobre!')
    console.log('Tá bom')
})

app.get('saudacao/:nome;', function(req, res){
    res.send(req.params)
})

app.get('saudacao1/:nome', function(req, res){
    res.send('<h3>Olá ' + req.params.nome + " </h3><hr> <h4>E-mail: " + req.params.email + "</h4>");
})