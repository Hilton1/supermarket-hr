# Supermarket HR

## Descrição do Projeto

O **Supermarket HR** consiste em ser, literalmente, um supermercado. Nele, irá conter funções para controle de estoque (entrada e saída de produtos), com funções separadas para profissionais, como Controlador de Estoque e Vendedor. Com funcionalidades separadas para cada um.

## Requisitos

### Controlador de Estoque

- [ ]  Cadastrar novos produtos
- [ ]  Visualizar produtos cadastrados
- [ ]  Buscar produtos por ID
- [ ]  Buscar produtos por Código de barras
- [ ]  Editar produtos
- [ ]  Excluir produtos

### Vendedor

- [ ]  Verificar a quantidade de itens de determinado produto no estoque
- [ ]  Vender um produto

## Regras de Negócio

- [ ]  O Controlador de Estoque não poderá ter acesso às funcionalidades do vendedor e vice-versa.
- [ ]  Não deve ser permitido cadastrar um produto com código de barras já em uso
- [ ]  Não deve ser possível editar um produto inexistente
- [ ]  Deve ser possível modificar preço e quantidade de produtos na hora da edição.
- [ ]  Não deve ser possível excluir um produto inexistente
- [ ]  Não deve ser possível vender um produto por um valor inferior ao cadastrado
- [ ]  Deve ser possível informar o troco a ser repassado para o cliente.