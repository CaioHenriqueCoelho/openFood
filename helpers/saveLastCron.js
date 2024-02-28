const getDate = require('./getDate');
const db = require('../db');

function saveLastcron(){
    const date = getDate();
    db.query(
    'INSERT INTO cron_executed (last_cron) VALUES (?)',
    [date],
    (err, result) => {
        if (err) {
            console.error('Erro ao inserir o registro na tabela cron_executed:', err);
            reject(err);
            return;
        }
        console.log('Último Cron Executado : ', date);
    }
    );
}
module.exports = saveLastcron;