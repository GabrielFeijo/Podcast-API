# Podcast-API

Este projeto é uma solução para criar um carrinho de compras baseado no carrinho de compras de um E-Commerce, onde o carrinho armazena e calcula automaticamente o subtotal dos itens.

## 📦 Estrutura do Projeto

```plaintext
📦src
 ┣ 📜server.ts
 ┣ 📂modules
 ┃ ┗ 📂podcast
 ┃   ┣ 📜podcast.controller.ts
 ┃   ┣ 📜podcast.route.ts
 ┃   ┣ 📜podcast.schema.ts
 ┃   ┗ 📜podcast.service.ts
 ┣ 📂utils
 ┃ ┗📜prisma.ts
 ┗
```

## 📖 Funcionalidades

### Domínio da Aplicação: Podcasts

O projeto possui as seguintes funcionalidades principais:

### Podcasts

- Criar um novo podcast
- Obter todos os podcasts
- Obter um podcast por ID
- Deletar um podcast por ID
- Buscar podcasts por categoria e/ou episódio

### Entidades Representadas

- Podcast

## 🚀 Começo

Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com),
[NodeJS](https://nodejs.org/en).

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

### 🎲 Colocando o projeto para funcionar localmente:

```bash
# Clone o repositório
$ git clone https://github.com/GabrielFeijo/Podcast-API
```

```bash
# Acesse a pasta do projeto em terminal/cmd
$ cd Podcast-API

# Instale as dependências
$ npm install

# Gere o cliente Prisma
$ npx prisma generate

# Aplique as migrações do banco de dados
$ npx prisma migrate dev

# Inicie a aplicação em DEV:
$ npm run dev
```

## 🛠️ Feito utilizando

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" width="40" height="45" />
