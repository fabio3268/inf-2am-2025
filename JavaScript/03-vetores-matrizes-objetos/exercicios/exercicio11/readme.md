# Exercício - Programação Web I

## Cadastro e Gerenciamento de Usuários

### Descrição do Exercício

Implemente uma aplicação web para o **Cadastro e Gerenciamento de Usuários**. O objetivo é criar uma interface funcional que permita:

1. **Cadastrar novos usuários** com os seguintes campos:
   - Nome
   - Email
   - Senha

2. **Exibir a lista de usuários cadastrados** logo abaixo do formulário. Cada usuário deve ser exibido com:
   - Nome
   - Email
   - Dois botões:
     - **Excluir**: Remove o usuário da lista.
     - **Editar**: Preenche os dados do usuário no formulário para edição.

3. **Editar os dados de um usuário já cadastrado**:
   - Ao clicar no botão **Editar**, os dados do usuário selecionado devem ser carregados no formulário.
   - Após editar os dados no formulário, o botão de inclusão deve atualizar os dados do usuário na lista.

4. **Ordenar a lista de usuários**:
   - Um botão deve permitir ordenar os usuários em ordem alfabética pelo nome.

---

### Requisitos

**JavaScript**:
   - Implemente as funcionalidades de inclusão, exclusão, edição e ordenação.
   - Utilize um array de objetos para armazenar os usuários.
   - Atualize a lista de usuários dinamicamente no DOM após cada operação.

---

### Estrutura Esperada

#### Formulário
- Campos:
  - Nome
  - Email
  - Senha
- Botão:
  - **Incluir/Editar**

#### Lista de Usuários
- Cada item da lista deve exibir:
  - Nome
  - Email
  - Botões:
    - **Excluir**: Remove o usuário da lista.
    - **Editar**: Preenche os dados no formulário para edição.
#### Botão de Ordenação
- Um botão para ordenar os usuários em ordem alfabética pelo nome.
