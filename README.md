# Projeto OpenFood

## Descrição
Este projeto é uma api rest com persistência de dados utilizando cron

## Instalação
Para usar este projeto, basta seguir estas etapas simples:

1. Clone este repositório em sua máquina local:
2. instale o node.js
3. Abre o visual studio code
4. abra a pasta do projeto
5. abra um terminal digite: npm install tecle enter e aguarde a instalação
6. installe o mysql, acesse a pasta schema tera um arquivo chamado mysql.sql execute este arquivo no seu mysql
7. atualize o arquivo db.js (usuario senha host) para conseguir realizar a conexão com o banco de dados
8. extraia todos os arquivos rar da pasta data
9. configure o horario para o cron  no arquivo config_cron.json
10. quando chegar o horário configurado o banco de dados será populado com as informações de cada arquivo json da pasta /data
11. configure a chave API-Key por padrão está "abc123" o arquivo para configuração fica em middleware/authentication.js (necessário para chamar os endpoints)
12. inicie o projeto com o comando no terminal: node index.js
13. a documentação da api fica em 127.0.0.1:3000/doc
14. para realizar os testes unitarios execute no terminal : npm test
15. faça a consulta na api no endpoint /  exemplo: 127.0.0.1:3000/
16. verifique o status da api
17. docker configurado porém percebi que o horário do container do docker é diferente
