
const os = require('os');
const { exec } = require('child_process');
class StatusModel {
    constructor() {
        // Inicialização do modelo, como conexão com o banco de dados
        console.log('Importando conexão com o banco de dados...');
        this.db = require('../db');
        console.log('Conexão com o banco de dados importada com sucesso.');
    }
  
    getAllStatus(req, res) {
        return new Promise((resolve, reject) => {
  
            let dbStatus = 'Desconectado';
            let lastCronExecution = 'N/A';
            let uptime = 'N/A';
            let memoryUsage = 'N/A';
    
            this.db.query('select last_cron from cron_executed order by last_cron desc limit 1', (dbErr, result) => {
                if (!dbErr) {
                    dbStatus = 'Conectado';
                }
                const dataUTC = new Date(result[0].last_cron);
                const dataLocal = dataUTC.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
                lastCronExecution = dataLocal;
                uptime = os.uptime();
                memoryUsage = process.memoryUsage();
                
                const response = {
                    dbStatus,
                    lastCronExecution,
                    uptime,
                    memoryUsage
                };
                resolve(response);
            });
        
        });

    }
  }
  
  module.exports = StatusModel;
  