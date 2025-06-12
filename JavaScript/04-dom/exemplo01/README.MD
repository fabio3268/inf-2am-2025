# Prova PW1 - Sistema de Gerenciamento de Alunos

Nesta prova, você irá implementar um sistema simples de gerenciamento de alunos utilizando JavaScript. O sistema permitirá a adição e a exclusão de alunos, exibição da lista de alunos cadastrados, e cálculo da média das notas.

---

## Questão 01 - Exibição da Lista de Alunos (3,0 pontos)

Implemente a função `renderStudentList()` que atualiza a interface com a lista de alunos cadastrados:

1. **(1,0)** Inicialização da lista:
   - Capture o elemento com class `students-list`.
   - Limpe o conteúdo atual do elemento.
   - Verifique se o array `students` está vazio e, em caso positivo, exiba uma mensagem informativa:
     - Estrutura: 

```html
<div class="empty-state">
    Nenhum estudante cadastrado...
</div>
```

2. **(2,0)** Para cada aluno no array `students`:
   - Crie um card (div com classe "student-card") para representar o aluno, com a seguinte estrutura de conteúdo:

```html

<div class="student-card">
   <span class="student-name">Nome do Aluno</span>
   <span class="student-grade">Nota</span>
   <button class="btn-delete" idStudent="1" title="Excluir aluno">
       🗑️ Excluir
   </button>
</div>

```
- Substitua `Nome do Aluno` pelo nome do aluno, `Nota` pela nota do aluno e no atributo `idStudent` é o índice do estudante correspondente a sua posição em `students`.
   - Adicione o card ao elemento `studentsList`.

---

## Questão 02 - Cadastro de Alunos (3,0 pontos)

Implemente as seguintes funcionalidades relacionadas ao cadastro de alunos:

1. **(2,0)** A função para adicionar alunos:
    - Capture os valores dos campos de input com id `studentName` e `studentGrade`.
    - Valide se o nome do aluno e a nota foram informados corretamente.
    - Adicione o novo aluno ao array `students` com as propriedades:
        - `name`: nome do aluno
        - `grade`: nota do aluno
    - Atualize a interface chamando a função `renderStudentList()` para exibir a lista de alunos cadastrados.
    - Limpe os campos do formulário após o cadastro.

2. **(1,0)** Exiba mensagens de erro:
    - Caso o nome ou a nota não sejam informados, exiba uma mensagem de erro no elemento com class `errorMessage` `Informe o nome e a nota do aluno.`.
---
## Questão 03 - Exclusão de Alunos (2,0 pontos)

Implemente a funcionalidade de exclusão de alunos:

1. **(2,0)** Exclusão de alunos:
   - Capture o evento de clique no botão de exclusão (com classe `btn-delete`).
   - Utilize o atributo `idStudent` do botão para identificar qual aluno deve ser removido do array `students`.
   - Após a exclusão, atualize a interface chamando a função `renderStudentList()` para refletir a lista atualizada de alunos.

---

## Questão 04 - Cálculo da Média das Notas (2,0 pontos)

Implemente a funcionalidade de cálculo da média das notas:

1. **(1,5)** A função para calcular a média:
   - Quando o botão `CALCULAR MÉDIA DAS NOTAS` for precionado calcule a média das notas dos alunos cadastrados.
   - Exiba o resultado no elemento com id `averageDisplay`.

2. **(0,5)** Exiba mensagem de erro:
   - Caso não haja alunos cadastrados, exiba uma mensagem de erro no elemento com class `errorMessage` `Não é possível calcular a média sem alunos.`. 