const express = require('express');
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');
const port = 3003;

const app = express();

app.use(bodyParser.urlencoded({ extended:true })); // Com 'use', qualquer requisição passa por esse middleware

app.get('/produtos', (req, res, next) => {
    //res.send({name: 'Notebook', price: 123.45}); send converte o objeto para JSON automaticante
    res.send(bancoDeDados.getProducts());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduct(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.saveProduct({
        name: req.body.name,
        price: req.body.price
    });

    res.send(produto); // JSON
});

app.put('/produtos/:id', (req, res, next) => {
    const product = bancoDeDados.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    });

    res.send(produto); // JSON
});

app.delete('/products/:id', (req, res, next) => {
    res.send(bancoDeDados.deleteProduct(req.params.id)); // JSON
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}...`);
});