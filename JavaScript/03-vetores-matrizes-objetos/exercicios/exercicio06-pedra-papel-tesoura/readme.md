# Jogo: Pedra, Papel, Tesoura

Este exercício faz parte da disciplina de **Programação Web** e tem como objetivo ensinar o uso de **manipulação de DOM**, **eventos**, **arrays**, **funções** e **lógica condicional** em JavaScript. Siga as instruções abaixo para desenvolver o jogo.

---

## Enunciado

Você deve criar uma aplicação web que permita ao usuário jogar Pedra, Papel, Tesoura contra o computador. A interface deve conter:

1. Três botões ou imagens representando as opções: Pedra, Papel e Tesoura.
2. Um placar que exibe a pontuação do jogador e do computador.
3. Uma área que exibe o resultado da rodada (quem venceu ou se houve empate).
4. Um botão para reiniciar o jogo, zerando o placar.

---

## Requisitos

1. **HTML**:
    - Crie três botões ou imagens para representar as opções de jogada: Pedra, Papel e Tesoura.
    - Adicione elementos para exibir o placar do jogador e do computador.
    - Inclua um elemento para exibir o resultado da rodada.
    - Adicione um botão para reiniciar o jogo.

2. **CSS**:
    - Estilize a página para que fique visualmente agradável.
    - Centralize os elementos na tela.
    - Adicione estilos aos botões ou imagens e ao placar.

3. **JavaScript**:
    - Crie um array com as opções do computador: `["rock", "paper", "scissors"]`.
    - Adicione eventos de clique para os botões ou imagens:
        - Ao clicar em uma opção, o computador deve escolher aleatoriamente uma jogada.
        - Compare a jogada do jogador com a do computador para determinar o vencedor.
        - Atualize o placar e exiba o resultado da rodada.
    - Adicione um evento ao botão de reiniciar para zerar o placar e limpar o resultado.

---

## Passo a Passo

1. **Estrutura HTML**:
    - Crie um arquivo `index.html` com a estrutura básica.
    - Adicione os elementos necessários: botões ou imagens para as jogadas, placar, resultado e botão de reiniciar.

2. **Estilização CSS**:
    - Crie um arquivo `style.css` para estilizar a página.
    - Centralize os elementos e adicione estilos aos botões ou imagens, ao placar e ao resultado.

3. **Lógica em JavaScript**:
    - Crie um arquivo `script.js` para implementar a lógica.
    - Declare um array com as opções do computador.
    - Adicione eventos de clique para as jogadas e para o botão de reiniciar.
    - Compare as jogadas e determine o vencedor com base nas regras:
        - Pedra vence Tesoura.
        - Tesoura vence Papel.
        - Papel vence Pedra.
        - Jogadas iguais resultam em empate.
    - Atualize dinamicamente o placar e o resultado.

---

## Arquivos do Projeto

- `index.html`: Estrutura da página.
- `style.css`: Estilização da página.
- `script.js`: Lógica do jogo.

---

## Critérios de Avaliação

1. O jogo funciona corretamente, permitindo ao jogador competir contra o computador.
2. O placar é atualizado dinamicamente após cada rodada.
3. O resultado da rodada é exibido corretamente.
4. O botão de reiniciar zera o placar e limpa o resultado.
5. O código está organizado e segue boas práticas.
6. A interface é visualmente agradável e funcional.

---

## Dicas

- Use `Math.random()` e `Math.floor()` para gerar a jogada aleatória do computador.
- Utilize `textContent` para atualizar o conteúdo dos elementos de placar e resultado.
- Teste sua aplicação para garantir que todos os requisitos foram atendidos.

Boa sorte!
```