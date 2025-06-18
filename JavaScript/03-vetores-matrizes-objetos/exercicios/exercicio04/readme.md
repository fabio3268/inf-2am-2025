# Exercício: Ordenar Lista de Nomes

Este exercício faz parte da disciplina de **Programação Web** e tem como objetivo ensinar o uso de **manipulação de DOM**, **eventos**, **arrays** e **métodos de ordenação** em JavaScript. Siga as instruções abaixo para desenvolver a funcionalidade solicitada.

---

## Enunciado

Você deve criar uma aplicação web que permita ao usuário gerenciar e ordenar uma lista de nomes. A interface deve conter:

1. Um campo de texto (`input`) para o usuário digitar um nome.
2. Três botões:
    - **Incluir**: Adiciona o nome digitado à lista.
    - **Excluir**: Remove o último nome adicionado à lista.
    - **Ordenar**: Ordena os nomes da lista em ordem alfabética.
3. Um elemento que exibe a quantidade de nomes atualmente na lista.
4. Uma lista visível que exibe os nomes adicionados.

---

## Requisitos

1. **HTML**:
    - Crie um campo de texto para entrada do nome.
    - Adicione três botões: um para incluir, outro para excluir e outro para ordenar.
    - Inclua um elemento para exibir a quantidade de nomes na lista.
    - Adicione uma lista (`ul`) para exibir os nomes adicionados.

2. **CSS**:
    - Estilize a página para que fique visualmente agradável.
    - Centralize os elementos na tela.
    - Adicione estilos aos botões, ao campo de texto e à lista.

3. **JavaScript**:
    - Crie um array para armazenar os nomes.
    - Adicione eventos aos botões:
        - **Incluir**: Captura o valor do campo de texto, adiciona ao array e atualiza a interface.
        - **Excluir**: Remove o último nome do array e atualiza a interface.
        - **Ordenar**: Ordena o array em ordem alfabética e atualiza a interface.
    - Certifique-se de que o campo de texto seja limpo após a inclusão.

---

## Passo a Passo

1. **Estrutura HTML**:
    - Crie um arquivo `index.html` com a estrutura básica.
    - Adicione os elementos necessários: `input`, botões, elemento para exibir a quantidade e a lista de nomes.

2. **Estilização CSS**:
    - Crie um arquivo `style.css` para estilizar a página.
    - Centralize os elementos e adicione estilos aos botões, ao campo de texto e à lista.

3. **Lógica em JavaScript**:
    - Crie um arquivo `script.js` para implementar a lógica.
    - Declare um array com três nomes iniciais.
    - Adicione os eventos de clique para os botões **Incluir**, **Excluir** e **Ordenar**.
    - Atualize dinamicamente o elemento que exibe a quantidade de nomes e a lista visível.

---

## Arquivos do Projeto

- `index.html`: Estrutura da página.
- `style.css`: Estilização da página.
- `script.js`: Lógica da aplicação.

---

## Critérios de Avaliação

1. A aplicação funciona corretamente, permitindo incluir, excluir e ordenar nomes.
2. A quantidade de nomes na lista é atualizada dinamicamente.
3. A lista visível é atualizada corretamente ao incluir, excluir ou ordenar nomes.
4. O código está organizado e segue boas práticas.
5. A interface é visualmente agradável e funcional.

---

## Dicas

- Use o método `push` para adicionar elementos ao array.
- Use o método `pop` para remover o último elemento do array.
- Use o método `sort` para ordenar o array em ordem alfabética.
- Utilize `textContent` para atualizar o conteúdo do elemento que exibe a quantidade de nomes.
- Utilize `innerHTML` ou métodos de manipulação de DOM para atualizar a lista visível.
- Teste sua aplicação para garantir que todos os requisitos foram atendidos.

Boa sorte!