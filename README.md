# Supermarket HR

## Descrição do Projeto

O **Supermarket HR** consiste em ser, literalmente, um supermercado. Nele, irá conter funções para controle de estoque (entrada e saída de produtos), com funções separadas para profissionais, como Controlador de Estoque e Vendedor. Com funcionalidades separadas para cada um.

## Requisitos

### Admin

- [x]  Listar funcionários
- [x]  Listar um funcionário por ID
- [x]  Cadastrar funcionários
- [x]  Editar funcionários
- [x]  Excluir funcionários

### Estoquista

- [x]  Cadastrar novos produtos
- [x]  Visualizar produtos cadastrados
- [x]  Buscar produtos por Código de barras
- [x]  Buscar produtos por ID
- [x]  Editar produtos
- [x]  Excluir produtos

### Vendedor

- [ ]  Verificar a quantidade de itens de determinado produto no estoque
- [ ]  Vender um produto

## Regras de Negócio

- [x]  Nenhum funcionário pode ter acesso a informações que são de outro nível de acesso.
- [x]  Não deve ser permitido cadastrar um funcionário com CPF já existente.
- [x]  Não deve ser permitido cadastrar um produto com código de barras já em uso
- [x]  Não deve ser possível editar um produto inexistente
- [x]  Não deve ser possível modificar o id dos produtos na hora da edição.
- [x]  Não deve ser possível excluir um produto inexistente
- [ ]  Não deve ser possível vender um produto por um valor inferior ao cadastrado
- [ ]  Deve ser possível informar o troco a ser repassado para o cliente.
