# Exercício: Gerenciar Lista de Nomes

Este exercício faz parte da disciplina de **Programação Web** e tem como objetivo ensinar o uso de **manipulação de DOM**, **eventos** e **arrays** em JavaScript. Siga as instruções abaixo para desenvolver a funcionalidade solicitada.

---

## Enunciado

Você deve criar uma aplicação web que permita ao usuário gerenciar uma lista de nomes. A interface deve conter:

1. Um campo de texto (`input`) para o usuário digitar um nome.
2. Dois botões:
   - **Incluir**: Adiciona o nome digitado à lista.
   - **Excluir**: Remove o último nome adicionado à lista.
3. Um elemento que exibe a quantidade de nomes atualmente na lista.

---

## Requisitos

**JavaScript**:
   - Crie um array para armazenar os nomes.
   - Adicione um evento ao botão **Incluir** para:
     - Capturar o valor do campo de texto.
     - Adicionar o valor ao array.
     - Atualizar a quantidade de nomes exibida.
   - Adicione um evento ao botão **Excluir** para:
     - Remover o último nome do array.
     - Atualizar a quantidade de nomes exibida.
   - Certifique-se de que o campo de texto seja limpo após a inclusão.

---

## Passo a Passo

**Lógica em JavaScript**:
   - Crie um arquivo `script.js` para implementar a lógica.
   - Declare um array vazio para armazenar os nomes.
   - Adicione os eventos de clique para os botões **Incluir** e **Excluir**.
   - Atualize dinamicamente o elemento que exibe a quantidade de nomes.

---

## Arquivos do Projeto

- `index.html`: Estrutura da página.
- `style.css`: Estilização da página.
- `script.js`: Lógica da aplicação.

---

## Critérios de Avaliação

1. A aplicação funciona corretamente, permitindo incluir e excluir nomes.
2. A quantidade de nomes na lista é atualizada dinamicamente.
3. O código está organizado e segue boas práticas.
4. A interface é visualmente agradável e funcional.