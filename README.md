# projetoDeLab_back-end-

Este repositório contém o código fonte do back-end do projeto de laboratório, desenvolvido para gerenciar as operações e dados de uma aplicação web de **empréstimo de livros**.

## Sobre o Projeto

O projeto é um sistema de gerenciamento de empréstimo de livros, permitindo o cadastro de usuários, controle de livros disponíveis, registro de empréstimos e devoluções. O objetivo é facilitar o gerenciamento de acervo e movimentação dos livros de forma eficiente e segura.

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript para o back-end
- **Express.js** – Framework para APIs REST
- **MongoDB ou outro banco de dados** – Persistência de dados (confirme qual está sendo utilizado)
- **JWT** – Autenticação de usuários
- **Dotenv** – Gerenciamento de variáveis de ambiente

## Principais Funcionalidades

- Cadastro, autenticação e gerenciamento de usuários
- CRUD de livros e controle do acervo
- Registro de empréstimos e devoluções
- Validação e tratamento de erros
- Integração com front-end via REST API

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/estefanialopes/projetoDeLab_back-end-.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com suas variáveis de ambiente (exemplo abaixo):

   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/seu_banco
   JWT_SECRET=sua_chave_secreta
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

## Estrutura de Pastas

```
src/
  controllers/
  models/
  routes/
  middlewares/
  utils/
```

## Contribuição

Para contribuir, faça um fork do projeto, crie uma branch com sua feature ou correção e envie um pull request.

## Licença

Este projeto está sob licença MIT.

---

Qualquer dúvida ou sugestão, abra uma issue ou entre em contato!
