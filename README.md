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
10. para utilizar a api (buscar dados) será necessário que o cron job seja executado para popular o banco com os dados então coloque um horário próximo.
11. quando chegar o horário configurado o banco de dados será populado com as informações de cada arquivo json da pasta /data
12. configure a chave API-Key por padrão está "abc123" o arquivo para configuração fica em middleware/authentication.js (necessário para chamar os endpoints)
13. inicie o projeto com o comando no terminal: node index.js
14. a documentação da api fica em 127.0.0.1:3000/doc
15. para realizar os testes unitarios execute no terminal : npm test
16. faça a consulta na api no endpoint /  exemplo: 127.0.0.1:3000/
17. verifique o status da api
18. docker configurado porém percebi que o horário do container do docker é diferente
19. caso  tenha alguma aplicação rodando na porta 3000 corrigir
