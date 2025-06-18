# Exercício: Gerenciar Lista de Tarefas

Este exercício faz parte da disciplina de **Programação Web** e tem como objetivo ensinar o uso de **manipulação de DOM**, **eventos**, **arrays** e **atualização dinâmica de elementos HTML** em JavaScript. Siga as instruções abaixo para desenvolver a funcionalidade solicitada.

---

## Enunciado

Você deve criar uma aplicação web que permita ao usuário gerenciar uma lista de tarefas. A interface deve conter:

1. Um campo de texto (`input`) para o usuário digitar a descrição da tarefa.
2. Três botões:
   - **Adicionar**: Adiciona a tarefa digitada à lista.
   - **Remover Última**: Remove a última tarefa adicionada à lista.
   - **Marcar Concluída**: Marca a tarefa selecionada como concluída.
3. Um elemento que exibe a quantidade de tarefas atualmente na lista.
4. Uma lista visível que exibe as tarefas adicionadas, com a possibilidade de selecionar uma tarefa.

---

## Requisitos

**JavaScript**:
   - Crie um array para armazenar as tarefas.
   - Adicione eventos aos botões:
     - **Adicionar**: Captura o valor do campo de texto, adiciona ao array e atualiza a interface.
     - **Remover Última**: Remove a última tarefa do array e atualiza a interface.
     - **Marcar Concluída**: Marca a tarefa selecionada como concluída (pode ser colocar um ✅ no lado esquerdo da tarefa).
   - Permita selecionar uma tarefa ao clicar nela.
   - Atualize dinamicamente o elemento que exibe a quantidade de tarefas e a lista visível.

---

## Passo a Passo

1. **Estrutura HTML**:
   - Crie um arquivo `index.html` com a estrutura básica.
   - Adicione os elementos necessários: `input`, botões, elemento para exibir a quantidade e a lista de tarefas.

2. **Estilização CSS**:
   - Crie um arquivo `style.css` para estilizar a página.
   - Centralize os elementos e adicione estilos aos botões, ao campo de texto e à lista.

3. **Lógica em JavaScript**:
   - Crie um arquivo `script.js` para implementar a lógica.
   - Declare um array vazio para armazenar as tarefas.
   - Adicione os eventos de clique para os botões **Adicionar**, **Remover Última** e **Marcar Concluída**.
   - Atualize dinamicamente o elemento que exibe a quantidade de tarefas e a lista visível.

---

## Arquivos do Projeto

- `index.html`: Estrutura da página.
- `style.css`: Estilização da página.
- `script.js`: Lógica da aplicação.

---

## Critérios de Avaliação

1. A aplicação funciona corretamente, permitindo adicionar, remover e marcar tarefas como concluídas.
2. A quantidade de tarefas na lista é atualizada dinamicamente.
3. A lista visível é atualizada corretamente ao adicionar, remover ou marcar tarefas.
4. O código está organizado e segue boas práticas.
5. A interface é visualmente agradável e funcional.

---

## Dicas

- Use o método `push` para adicionar elementos ao array.
- Use o método `pop` para remover o último elemento do array.
- Utilize `textContent` para atualizar o conteúdo do elemento que exibe a quantidade de tarefas.
- Utilize `innerHTML` ou métodos de manipulação de DOM para atualizar a lista visível.
- Teste sua aplicação para garantir que todos os requisitos foram atendidos.

Boa sorte!