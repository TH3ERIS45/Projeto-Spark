const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para salvar os dados
app.post('/salvar', (req, res) => {
    const { idade, sexo, altura, peso, nome, email, senha } = req.body;

    const sqlQuery = `
        INSERT INTO usuarios (nome, email, senha, idade, sexo, altura, peso) 
        VALUES ('${nome}', '${email}', '${senha}', ${idade}, '${sexo}', ${altura}, ${peso});
    `;

    fs.appendFile('dados.sql', sqlQuery, (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            res.status(500).send('Erro ao salvar os dados.');
        } else {
            console.log('Dados salvos com sucesso!');
            res.status(200).send('Dados salvos com sucesso.');
        }
    });
});

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
