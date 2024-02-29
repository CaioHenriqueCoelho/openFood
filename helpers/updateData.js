const dados = require('./getProducts');
const getDate = require('./getDate');
const fs = require('fs');
const db = require('../db');

function updateData() {
    return new Promise(async (resolve, reject) => {
        try {
            const directoryPath = './data';
            const filesArray = getFilesInDirectory(directoryPath);
            for (let i = 0; i < filesArray.length; i++) {
                if(filesArray[i].includes('json')){
                  let info = await dados(filesArray[i]);
                  await inserirDados(info);
                }

            }
            console.log('Todos os dados foram inseridos com sucesso.');
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function getFilesInDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        return files;
    } catch (error) {
        console.error('Erro ao listar os arquivos:', error);
        return [];
    }
}

function inserirDados(dados) {
    dados.forEach(item => {
      const { code, url, creator, created_t, created_datetime, last_modified_t, last_modified_datetime, product_name, quantity, packaging, packaging_tags } = item;
      const date = getDate();
      // Inserir dados na tabela product caso já existir ignorar
      db.query(
        'INSERT IGNORE INTO product (code, url, creator, created_t, created_datetime, last_modified_t, last_modified_datetime, product_name, quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [code, url, creator, date, date, date, date, product_name, quantity],
        (err, result) => {
          if (err) {
            console.error('Erro ao inserir o registro:', err);
            return;
          }
      
          if (result.affectedRows === 0) {
            console.log('O registro já existe no banco de dados.');
          } else {
            console.log('Registro inserido com sucesso:', code);
          }
        }
      );     
    });
}

module.exports = updateData;