const express = require('express');
const app = express();
const port = 3000;


let estoque = {};


app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    const qtd = parseInt(req.params.qtd);

    if (estoque[id]) {
        return res.status(400).json({ mensagem: 'Produto já existe!' });
    }

    estoque[id] = { nome, qtd };
    res.json({ mensagem: 'Produto adicionado com sucesso!', produto: estoque[id] });
});


app.get('/listar', (req, res) => {
    res.json(estoque);
});


app.get('/remover/:id', (req, res) => {
    const id = req.params.id;

    if (!estoque[id]) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }

    delete estoque[id];
    res.json({ mensagem: 'Produto removido com sucesso!' });
});


app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id;
    const qtd = parseInt(req.params.qtd);

    if (!estoque[id]) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }

    estoque[id].qtd = qtd;
    res.json({ mensagem: 'Quantidade alterada com sucesso!', produto: estoque[id] });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
