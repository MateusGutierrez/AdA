# Next.js - Aplicação de Acomodações

Esta é uma aplicação Next.js que consome a API de acomodações construída com FastAPI. A aplicação permite listar acomodações, filtrar por cidade e visualizar detalhes de uma acomodação específica. No momeno, é necessário rodar as duas aplicações ao mesmo tempo para verificar o funcionamento.

## Pré-requisitos

Antes de começar, certifique-se de que conseguiu rodar a API -> https://github.com/MateusGutierrez/api-acomodacoes. Em seguida, você deve verificar se tem os seguintes itens instalados:

- Node.js (v16 ou superior)
- NPM ou Yarn (gerenciadores de pacotes)
- A API FastAPI rodando localmente (ou em um ambiente de produção)

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio-nextjs.git
   cd AdA

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install

3. **Executando as aplicações**
   ```bash
   API:
      uvicorn main:app --reload
   Front-End:
      npm run dev
