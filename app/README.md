# NLW Pocket JavaScript - Gerenciador de Metas
Este projeto faz parte da trilha da Rocketseat e consiste na criação de um Gerenciador de Metas utilizando JavaScript e Node.js. O objetivo deste projeto é demonstrar conceitos que vão desde o nível básico até intermediário, aplicando boas práticas de programação e funcionalidades úteis para o gerenciamento pessoal de metas.

## Funcionalidades
**Cadastrar Metas**: Permite ao usuário cadastrar novas metas com um valor textual.

**Listar(Concluir/Não Concluir) Metas**: Funcionalidade para marcar metas como concluídas ou pendentes.

**Deletar Metas**: Possibilidade de excluir metas do sistema.

**Armazenamento**: As metas são armazenadas um arquivo JSON, permitindo manipulação simples e direta.

<br>

## Tecnologias Utilizadas
**JavaScript (ES6+)**: Linguagem utilizada para a lógica do aplicativo.

**Node.js**: Ambiente de execução para a parte back-end.

**Bibliotecas NPM**:
**inquirer**: Para interações no terminal (input do usuário).

<br>

## Conceitos Demonstrados
Manipulação de arrays e objetos em JavaScript.

Uso de estruturas de controle como condicionais e loops.

Aplicação de funções assíncronas com async/await.

Tratamento de erro e validação de entradas.

Filtros e buscas em listas de metas.
Utilização de métodos úteis como forEach(), filter(), some(), e map().

Utilização de docker

<br>

## Como Executar o Projeto

**Caso tenha o Docker instalado na sua máquina:**

## Construir a Imagem Docker

1. **Clone o Repositório**

   Primeiro, clone o repositório para sua máquina local(É necessário clonar o repositório dentro de uma pasta app):

   ```sh
   git clone https://github.com/EngelRyan/NLW_APP.git

2. **Navegue até o diretório**
   ```sh
   cd app

3. **Construir a Imagem Docker**
   ```sh
   docker build -t nlw-pocket-gerenciador-de-metas .

4. **Executar o Container**
   ```sh
   docker run -it -p 3000:3000 nlw-pocket-gerenciador-de-metas

<br>

**Caso não tenha o Docker na sua máquina:**

1. **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/nlw-pocket-javascript.git
    cd /app

2. **Instale as dependências:**

    ```sh
    npm install
    
3. **Execute o projeto:**

   ```sh
    node index.js

<div align="center">
    <img src="https://github.com/user-attachments/assets/c6c2079c-1402-42f3-9740-bc889977d2c4" alt="Imagem do Projeto" style="max-width: 100%; height: auto;">
    <img src="https://github.com/user-attachments/assets/13581a56-287e-4065-87ac-7ff3f01ae8a4" alt="Imagem do Projeto" style="max-width: 100%; height: auto;">
</div>


