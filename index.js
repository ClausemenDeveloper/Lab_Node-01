const express = require('express'); // Importa o framework Express para criar o servidor
const cors = require('cors'); // Importa o módulo CORS para permitir requisições de outros domínios

const app = express(); // Inicializa o servidor Express
const nome = 'WRAInvestimentos'; // Nome da aplicação
const port = 2000; // Define a porta onde o servidor será executado

app.use(express.json()); // Permite o uso de JSON nas requisições
app.use(cors()); // Habilita o CORS para permitir requisições de diferentes origens

// Array que armazenará as notas
let minhasNotas = [20, 10, 15, 17]; // Array inicial com algumas notas

// Rota GET para listar todas as notas
app.get('/minhasNotas', (req, res) => {
    res.json({ sucesso: true, data: minhasNotas }); // Retorna todas as notas em formato JSON
});

// Rota GET para obter uma nota específica pela posição no array
app.get('/minhasNotas/:posicao', (req, res) => {
    res.json({ sucesso: true, data: minhasNotas[req.params.posicao] }); // Retorna a nota na posição especificada
});

// Rota POST para adicionar uma nova nota via corpo da requisição
app.post('/minhasNotas', (req, res) => {
    minhasNotas.push(Number(req.body.valor)); // Adiciona a nota ao array convertendo para número
    res.json({ sucesso: true, data: minhasNotas }); // Retorna o array atualizado
});

// Rota POST para adicionar uma nova nota via parâmetro da URL
app.post('/minhasNotas/:valor', (req, res) => {
    minhasNotas.push(Number(req.params.valor)); // Adiciona a nota ao array convertendo para número
    res.json({ sucesso: true, data: minhasNotas }); // Retorna o array atualizado
});

// Rota PATCH para atualizar uma nota em uma posição específica
app.patch('/minhasNotas/:posicao', (req, res) => {
    minhasNotas[req.params.posicao] = Number(req.body.valor); // Atualiza a nota na posição especificada
    res.json({ sucesso: true, data: minhasNotas }); // Retorna o array atualizado
});

// Rota DELETE para remover uma nota em uma posição específica
app.delete('/minhasNotas/:posicao', (req, res) => {
    minhasNotas.splice(req.params.posicao, 1); // Remove a nota na posição especificada
    res.json({ sucesso: true, data: minhasNotas }); // Retorna o array atualizado
});

// Rota DELETE para remover todas as notas
app.delete('/minhasNotas', (req, res) => {
    minhasNotas = []; // Esvazia o array de notas
    res.json({ sucesso: true, data: minhasNotas }); // Retorna o array atualizado (vazio)
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port} - Aplicação: ${nome}`); // Exibe mensagem no console quando o servidor inicia
});
