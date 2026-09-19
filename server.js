const express = require('express');
const path = require ('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

// liberar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// rotas
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

app.get('/login', (req, res)  => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'login.html'));
});

app.get('/cadastro', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public','pages','cadastro.html'));
});

app.post('/login', (req, res) =>{
    const { email, senha } = req.body;

    console.log('Login:', email, senha);

    res.send('Login realizado com sucesso!');
});

app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    console.log('Cadastro:', nome, email, senha);

    res.send('Cadastro realizado com sucesso!');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public','pages','404.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando');
});