const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root_', 
    password: 'teste', 
    database: 'openFood',
    insecureAuth: true 
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL.');
});

module.exports = connection;
