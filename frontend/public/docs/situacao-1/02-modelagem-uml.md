# Modelagem UML

Este documento descreve os diagramas UML do sistema Cupcakes CS, incluindo diagramas de classe, casos de uso, sequência e atividades.

## Diagrama de Classes

O diagrama de classes representa a estrutura estática do sistema, mostrando as classes, seus atributos, métodos e relacionamentos.

### Classes Principais

#### Classe: Client
```
┌─────────────────────┐
│      Client         │
├─────────────────────┤
│ - id: Integer       │
│ - email: String     │
│ - firstName: String │
│ - lastName: String  │
│ - phone: String     │
│ - favoriteAddressId:│
│   Integer           │
│ - createdAt: Date   │
│ - updatedAt: Date   │
├─────────────────────┤
│ + create()          │
│ + findById()        │
│ + findByEmail()     │
│ + update()          │
│ + delete()          │
└─────────────────────┘
```

#### Classe: ClientAddress
```
┌─────────────────────┐
│   ClientAddress     │
├─────────────────────┤
│ - id: Integer       │
│ - clientId: Integer │
│ - address: String   │
│ - number: Integer   │
│ - complement: String│
│ - neighborhood: Str│
│ - city: String      │
│ - state: String     │
│ - zipcode: String   │
│ - createdAt: Date   │
│ - updatedAt: Date   │
├─────────────────────┤
│ + create()          │
│ + findByClientId()  │
│ + update()          │
│ + delete()          │
└─────────────────────┘
```

#### Classe: Cupcake
```
┌─────────────────────┐
│      Cupcake        │
├─────────────────────┤
│ - id: Integer       │
│ - name: String      │
│ - description: Str  │
│ - ingredients: Str  │
│ - image: String     │
│ - value: Decimal    │
├─────────────────────┤
│ + list()            │
│ + findById()        │
│ + findByCategory()  │
└─────────────────────┘
```

#### Classe: Category
```
┌─────────────────────┐
│     Category        │
├─────────────────────┤
│ - id: Integer       │
│ - name: String      │
│ - description: Str  │
│ - image: String     │
├─────────────────────┤
│ + list()            │
│ + findById()        │
└─────────────────────┘
```

#### Classe: Order
```
┌─────────────────────┐
│       Order         │
├─────────────────────┤
│ - id: Integer       │
│ - clientId: Integer │
│ - addressId: Integer│
│ - storeId: Integer  │
│ - cupcakes: JSON    │
│ - value: Decimal    │
│ - paymentMethod: Str│
│ - createdAt: Date   │
│ - updatedAt: Date   │
├─────────────────────┤
│ + create()          │
│ + findById()        │
│ + findByClientId()  │
│ + calculateTotal()  │
└─────────────────────┘
```

#### Classe: Store
```
┌─────────────────────┐
│       Store         │
├─────────────────────┤
│ - id: Integer       │
│ - name: String      │
│ - address: String   │
│ - number: Integer   │
│ - complement: Str   │
│ - neighborhood: Str │
│ - city: String      │
│ - state: String     │
│ - zipcode: String   │
├─────────────────────┤
│ + list()            │
│ + findByZipcode()   │
│ + findById()        │
└─────────────────────┘
```

### Relacionamentos

```
Client ──(1)──<──(N)── ClientAddress
  │
  │(1)
  │
  └──<──(N)── Order

Order ──(N)──>──(1)── Store
Order ──(N)──>──(1)── ClientAddress

Cupcake ──(N)──<──>──(N)── Category

Store ──(1)──<──(N)── StoreDeliveryRange
```

## Diagrama de Casos de Uso

### Casos de Uso - Cliente Sem Conta

```
┌─────────────────────────────────────────┐
│         Sistema Cupcakes CS             │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ Visualizar Cupcakes             │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Listar Categorias               │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Filtrar por Categoria           │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Adicionar ao Carrinho           │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Criar Conta                     │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Realizar Pedido (sem conta)     │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
         ▲
         │
    ┌────┴────┐
    │ Cliente │
    └─────────┘
```

### Casos de Uso - Cliente Com Conta

```
┌─────────────────────────────────────────┐
│         Sistema Cupcakes CS             │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ Fazer Login                      │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Gerenciar Perfil                 │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Cadastrar Endereço               │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Listar Endereços                 │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Realizar Pedido                  │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Visualizar Pedidos               │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │ Selecionar Loja por Região      │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
         ▲
         │
    ┌────┴────┐
    │ Cliente │
    │ Logado  │
    └─────────┘
```

## Diagrama de Sequência

### Sequência: Realizar Pedido

```
Cliente    Frontend    Backend    Banco de Dados
   │           │          │            │
   │──Adicionar ao Carrinho───────────>│
   │           │          │            │
   │<──Carrinho Atualizado─────────────│
   │           │          │            │
   │──Finalizar Compra───────────────>│
   │           │          │            │
   │           │──GET /client?email───>│
   │           │          │            │
   │           │          │──SELECT───>│
   │           │          │<──Client───│
   │           │<──Client──────────────│
   │           │          │            │
   │           │──GET /store?zipcode─>│
   │           │          │            │
   │           │          │──SELECT───>│
   │           │          │<──Store────│
   │           │<──Store───────────────│
   │           │          │            │
   │           │──POST /order─────────>│
   │           │          │            │
   │           │          │──INSERT───>│
   │           │          │<──Order────│
   │           │<──Order───────────────│
   │<──Pedido Confirmado───────────────│
   │           │          │            │
```

### Sequência: Cadastrar Cliente

```
Cliente    Frontend    Backend    Banco de Dados
   │           │          │            │
   │──Preencher Formulário───────────>│
   │           │          │            │
   │──Submeter Cadastro──────────────>│
   │           │          │            │
   │           │──POST /client───────>│
   │           │          │            │
   │           │          │──SELECT───>│
   │           │          │  (verifica │
   │           │          │   email)   │
   │           │          │<──NULL─────│
   │           │          │            │
   │           │          │──INSERT───>│
   │           │          │<──Client───│
   │           │<──Client──────────────│
   │<──Conta Criada────────────────────│
   │           │          │            │
```

## Diagrama de Atividades

### Atividade: Processo de Compra

```
[Início] → [Navegar Produtos] → [Adicionar ao Carrinho]
    ↓
[Ver Carrinho] → {Carrinho Vazio?}
    │                    │
    │                    └──> [Continuar Comprando]
    │                              ↓
    │                    [Navegar Produtos]
    │
    └──> [Finalizar Compra]
              ↓
    {Cliente Logado?}
    │              │
    │              └──> [Fazer Login]
    │                        ↓
    │              [Criar Conta]
    │                        ↓
    └──> [Selecionar Endereço]
              ↓
    {Endereço Cadastrado?}
    │              │
    │              └──> [Cadastrar Endereço]
    │                        ↓
    └──> [Selecionar Loja]
              ↓
    [Escolher Método de Pagamento]
              ↓
    [Confirmar Pedido]
              ↓
    [Pedido Criado]
              ↓
    [Fim]
```

### Atividade: Cadastro de Cliente

```
[Início] → [Preencher Dados]
    ↓
[Validar Email] → {Email Válido?}
    │                    │
    │                    └──> [Erro: Email Inválido]
    │                              ↓
    │                    [Corrigir Email]
    │                              ↓
    │                    [Preencher Dados]
    │
    └──> [Verificar Email Existente]
              ↓
    {Email Existe?}
    │              │
    │              └──> [Erro: Email Já Cadastrado]
    │                        ↓
    │              [Usar Outro Email]
    │                        ↓
    │              [Preencher Dados]
    │
    └──> [Criar Cliente]
              ↓
    [Cliente Criado]
              ↓
    [Fim]
```

## Observações sobre os Diagramas

### Diagrama de Classes
- Representa a estrutura estática do sistema
- Baseado no schema Prisma e nas entidades do backend
- Métodos representam operações principais de cada classe

### Diagrama de Casos de Uso
- Separado em dois contextos: cliente sem conta e com conta
- Foca nas funcionalidades principais do sistema
- Representa a interação do usuário com o sistema

### Diagrama de Sequência
- Mostra a interação temporal entre componentes
- Inclui Frontend, Backend e Banco de Dados
- Representa fluxos críticos do sistema

### Diagrama de Atividades
- Mostra o fluxo de processos de negócio
- Inclui decisões e loops
- Facilita o entendimento dos processos

## Referências

- Diagramas visuais disponíveis em:
  - `docs/cupcakes-cs-diagram-use-case-with-account.html`
  - `docs/cupcakes-cs-diagram-use-case-without-account.html`
  - `docs/cupcakes-cs - diagrama-de-classes.png`

