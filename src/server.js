const express = require('express');

const api = express();

api.get('/', (req, res) =>{
    res.json({message: "bem-vindo"});
});

api.listen(3000, ()=> {
    console.log("rodando o servidor na porta 3000")
});