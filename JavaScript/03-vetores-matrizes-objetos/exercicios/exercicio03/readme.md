# Exercício: Gerenciar Lista de Nomes com Exibição

Este exercício faz parte da disciplina de **Programação Web** e tem como objetivo ensinar o uso de **manipulação de DOM**, **eventos**, **arrays** e **atualização dinâmica de elementos HTML** em JavaScript. Siga as instruções abaixo para desenvolver a funcionalidade solicitada.

---

## Enunciado

Você deve criar uma aplicação web que permita ao usuário gerenciar uma lista de nomes. A interface deve conter:

1. Um campo de texto (`input`) para o usuário digitar um nome.
2. Dois botões:
   - **Incluir**: Adiciona o nome digitado à lista.
   - **Excluir**: Remove o último nome adicionado à lista.
3. Um elemento que exibe a quantidade de nomes atualmente na lista.
4. Uma lista visível que exibe os nomes adicionados.

---

## Requisitos

**JavaScript**:
   - Crie um array para armazenar os nomes.
   - Adicione um evento ao botão **Incluir** para:
     - Capturar o valor do campo de texto.
     - Adicionar o valor ao array.
     - Atualizar a quantidade de nomes exibida.
     - Atualizar a lista visível com o novo nome.
   - Adicione um evento ao botão **Excluir** para:
     - Remover o último nome do array.
     - Atualizar a quantidade de nomes exibida.
     - Atualizar a lista visível removendo o último nome.
   - Certifique-se de que o campo de texto seja limpo após a inclusão.

---

## Passo a Passo

**Lógica em JavaScript**:
   - Crie um arquivo `script.js` para implementar a lógica.
   - Declare um array vazio para armazenar os nomes.
   - Adicione os eventos de clique para os botões **Incluir** e **Excluir**.
   - Atualize dinamicamente o elemento que exibe a quantidade de nomes e a lista visível.

---

## Arquivos do Projeto

- `index.html`: Estrutura da página.
- `style.css`: Estilização da página.
- `script.js`: Lógica da aplicação.

---

## Critérios de Avaliação

1. A aplicação funciona corretamente, permitindo incluir e excluir nomes.
2. A quantidade de nomes na lista é atualizada dinamicamente.
3. A lista visível é atualizada corretamente ao incluir ou excluir nomes.
4. O código está organizado e segue boas práticas.
5. A interface é visualmente agradável e funcional.

---

## Dicas

- Use o método `push` para adicionar elementos ao array.
- Use o método `pop` para remover o último elemento do array.
- Utilize `textContent` para atualizar o conteúdo do elemento que exibe a quantidade de nomes.
- Utilize `innerHTML` ou métodos de manipulação de DOM para atualizar a lista visível.
- Teste sua aplicação para garantir que todos os requisitos foram atendidos.

Boa sorte!