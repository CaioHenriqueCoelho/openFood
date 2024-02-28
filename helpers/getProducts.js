const readline = require('readline');
const fs = require('fs');

function return_dados(archive) {
    return new Promise((resolve, reject) => {
        const linhas = [];
        const leitor = readline.createInterface({
            input: fs.createReadStream(`data/${archive}`),
            console: false
        });

        leitor.on('line', (linha) => {
            linha = JSON.parse(linha);
            if (linha.carnitine_100g.includes(';;;;;;;;;;;;;;;;;;;;;')) {
                linha.carnitine_100g = '';
            }
            if (linha.code.includes('"')){
                linha.code = linha.code.replace('"','');
            }
            linhas.push(linha);
            if (linhas.length == 100) {
                console.log("100 linhas alcançadas. Encerrando leitura...");
                leitor.close();
            }
        });

        leitor.on('close', () => {
            resolve(linhas);
        });

        leitor.on('error', (error) => {
            reject(error);
        });
    });
}

module.exports = return_dados;
