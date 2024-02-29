# Use uma imagem Node.js como base
FROM node:14

ENV TZ=America/Sao_Paulo

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./


# Instale as dependências
RUN npm install

# Copie o resto do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que sua aplicação Node.js estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]

