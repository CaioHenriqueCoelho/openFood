// db.js

const mysql = require('mysql');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do servidor MySQL
    user: 'root_', // Nome de usuário do MySQL
    password: 'teste', // Senha do MySQL
    database: 'openFood' // Nome do banco de dados a ser usado
});

// Conecte-se ao banco de dados
connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error; // Você pode optar por lidar com o erro de outra forma, dependendo do seu aplicativo
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL.');
});

module.exports = connection;
