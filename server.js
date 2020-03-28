const express = require('express');
const app = express();
const data = require('./data.json'); //ou conexao com o banco de dados

// Verbos HTTP
// get (receber dados de um resource) - post (enviar dados ou info. para serem processados por um resource) - put (atualizar os dados do resource) - delete (deleta um resource)

app.use(express.json());

//pega todos os clientes
app.get('/clients', function (req, res){
    res.json(data);
});

//pega o cliente através do parametro ID
app.get('/clients/id', function (req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    
    if (!client) return res.status(204).json();

    res.json(client);
});

//salva cliente
app.post('/clients', function (req, res){
    const { name, email } = res.body;

    res.json({name, email});
});

//atualiza cliente
app.put('/clients', function (req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const { name, email } = res.body;

    client.name = name;

    res.json(client);
});

app.delete('/clients', function (req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(cliente => client.id != id);

    res.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log('Server is runing');
});