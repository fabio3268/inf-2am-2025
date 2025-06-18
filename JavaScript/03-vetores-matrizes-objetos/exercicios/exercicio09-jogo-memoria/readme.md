# Jogo da Memória - Orientações para a Questão de Prova

## Enunciado

Implemente um **Jogo da Memória** utilizando as tecnologias HTML, CSS e JavaScript. O objetivo do jogo é encontrar todos os pares de cartas iguais. Siga as orientações abaixo para desenvolver a aplicação.

---

## Requisitos

1. **HTML**:
    - Crie uma estrutura semântica para o jogo.
    - Utilize as tags `header`, `main`, `section`, `ul`, `li`, etc.
    - O tabuleiro do jogo deve ser composto por uma grade de cartas (pares de cartas iguais).

2. **CSS**:
    - Estilize o layout do jogo para que seja visualmente agradável.
    - Adicione estilos para as cartas em seus estados:
        - **Virada para baixo**: Exiba um fundo padrão.
        - **Virada para cima**: Exiba o conteúdo da carta.
    - O design deve ser responsivo, adaptando-se a diferentes tamanhos de tela.

3. **JavaScript**:
    - Implemente a lógica do jogo:
        - As cartas devem ser embaralhadas ao iniciar o jogo.
        - Ao clicar em uma carta, ela deve ser virada.
        - Se duas cartas viradas forem iguais, elas permanecem viradas.
        - Se forem diferentes, elas devem voltar à posição inicial após um breve intervalo.
    - O jogo deve terminar quando todos os pares forem encontrados.
    - Adicione um botão para reiniciar o jogo.

4. **Funcionalidades Extras (Opcional)**:
    - Exiba o número de jogadas realizadas.
    - Adicione um cronômetro para medir o tempo de conclusão do jogo.

---

## Critérios de Avaliação

1. **HTML**:
    - Estrutura semântica e bem organizada.
    - Uso correto das tags.

2. **CSS**:
    - Estilização clara e consistente.
    - Design responsivo.

3. **JavaScript**:
    - Lógica funcional e bem implementada.
    - Código organizado e seguindo boas práticas.

4. **Usabilidade**:
    - O jogo deve ser funcional e intuitivo.
    - O botão de reiniciar deve funcionar corretamente.

5. **Extras (se implementados)**:
    - Contador de jogadas e cronômetro funcionando corretamente.

---

## Dicas

- Utilize `Math.random()` para embaralhar as cartas.
- Use `setTimeout()` para criar o intervalo antes de virar as cartas de volta.
- Teste o jogo em diferentes navegadores para garantir compatibilidade.
```