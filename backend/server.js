// backend/server.js
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // A porta do seu servidor, 3000 por padrão

// Middleware
app.use(express.json()); // Permite que o Express leia JSON no corpo das requisições
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173' // Permitir requisições apenas do seu front-end (ajuste a porta se for diferente do padrão do Vite)
}));

// Configuração do transporter de e-mail com variáveis de ambiente
// IMPORTANTISSIMO: Nunca coloque credenciais diretamente no código!
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  family: 4,
});

// Rota para envio do formulário de contato
app.post('/api/enviar-contato', async (req, res) => {
  const { nome, sobrenome, email, mensagem } = req.body;

  // Validação básica do lado do servidor (essencial!)
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ message: 'Nome, Email e Mensagem são campos obrigatórios.' });
  }

  try {
    const mailOptions = {
      from: `"Seu Portfólio" <${process.env.EMAIL_FROM}>`, // Remetente que aparecerá no e-mail
      to: process.env.EMAIL_TO, // Seu e-mail onde você quer receber as mensagens
      replyTo: email, // Opcional: define o e-mail do usuário como resposta
      subject: `Nova mensagem do Portfólio de ${nome}`,
      html: `
        <h3>Nova Mensagem de Contato</h3>
        <p><strong>Nome:</strong> ${nome} ${sobrenome || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    // Em um ambiente de produção, logue o erro mas não mostre detalhes para o usuário
    res.status(500).json({ message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor de back-end rodando em http://localhost:${port}`);
});