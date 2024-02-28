const fs = require('fs');
const cron = require('node-cron');

const saveLastCron = require('./helpers/saveLastCron');
const updateData = require('./helpers/updateData');

function lerConfiguracao() {
  try {
    const configRaw = fs.readFileSync('config_cron.json');
    const config = JSON.parse(configRaw);
    return config;
  } catch (error) {
    console.error('Erro ao ler o arquivo de configuração:', error);
    return null;
  }
}

async function inicializarCron() {
  const config = lerConfiguracao();
  if (!config || !config.hora || !config.min) {
    console.error('Arquivo de configuração inválido ou ausente.');
    return;
  }

  const horaExecucao = config.hora;
  const minExecucao = config.min;

  console.log(`Configuração de execução definida para ${horaExecucao}:${minExecucao}.`);
  cron.schedule(`${minExecucao} ${horaExecucao} * * *`, async () => {
    console.log('Executando tarefa');
    await updateData();
    saveLastCron();
  });
}

module.exports = { inicializarCron };
