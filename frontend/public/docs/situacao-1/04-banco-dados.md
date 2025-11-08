# Projeto de Banco de Dados

## Visão Geral

O banco de dados foi projetado para suportar um e-commerce de cupcakes, com foco em:
- Gestão de clientes e endereços
- Catálogo de produtos (cupcakes e categorias)
- Gestão de pedidos
- Gestão de lojas e áreas de atendimento

## Projeto Conceitual

### Modelo Entidade-Relacionamento (MER)

O modelo conceitual representa as entidades principais e seus relacionamentos:

```
┌─────────────┐         ┌──────────────────┐
│   Client    │◄────────┤ ClientAddress    │
│             │ 1     N │                  │
└──────┬──────┘         └────────┬─────────┘
       │                          │
       │ 1                        │ 1
       │                          │
       │ N                        │ N
       │                          │
┌──────▼──────────┐      ┌────────▼─────────┐
│     Order       │      │                  │
│                 │      │                  │
└──────┬──────────┘      └──────────────────┘
       │
       │ N
       │
       │ 1
       │
┌──────▼──────────┐
│     Store       │
│                 │
└──────┬──────────┘
       │
       │ 1
       │
       │ N
       │
┌──────▼──────────────┐
│ StoreDeliveryRange  │
└─────────────────────┘

┌─────────────┐         ┌─────────────┐
│  Category   │◄────────┤   Cupcake   │
│             │ N     N │             │
└─────────────┘         └─────────────┘
```

### Entidades Principais

1. **Client**: Representa os clientes do sistema
2. **ClientAddress**: Endereços de entrega dos clientes
3. **Category**: Categorias de cupcakes
4. **Cupcake**: Produtos (cupcakes) disponíveis
5. **Store**: Lojas físicas
6. **StoreDeliveryRange**: Faixas de CEP atendidas por cada loja
7. **Order**: Pedidos realizados pelos clientes

### Relacionamentos

- **Client 1:N ClientAddress**: Um cliente pode ter múltiplos endereços
- **Client 1:N Order**: Um cliente pode realizar múltiplos pedidos
- **ClientAddress 1:N Order**: Um endereço pode ser usado em múltiplos pedidos
- **Store 1:N StoreDeliveryRange**: Uma loja pode atender múltiplas faixas de CEP
- **Store 1:N Order**: Uma loja pode atender múltiplos pedidos
- **Category N:N Cupcake**: Um cupcake pode pertencer a múltiplas categorias
- **Order N:1 Store**: Um pedido é atendido por uma loja
- **Order N:1 Client**: Um pedido pertence a um cliente
- **Order N:1 ClientAddress**: Um pedido é entregue em um endereço

## Projeto Lógico Normalizado

### Normalização

O banco está normalizado até a **3ª Forma Normal (3FN)**:

#### 1ª Forma Normal (1FN)
- Todos os atributos são atômicos
- Não há grupos repetitivos
- Cada linha é única

#### 2ª Forma Normal (2FN)
- Está em 1FN
- Todos os atributos não-chave dependem completamente da chave primária

#### 3ª Forma Normal (3FN)
- Está em 2FN
- Não há dependências transitivas (atributos não-chave dependem apenas da chave primária)

### Estrutura das Tabelas

#### Tabela: `Client`
- **Chave Primária**: `id` (SERIAL)
- **Chave Única**: `email` (VARCHAR(128))
- **Atributos**:
  - `firstName` (VARCHAR(64)) - Nome do cliente
  - `lastName` (VARCHAR(64)) - Sobrenome do cliente
  - `phone` (CHAR(11)) - Telefone (formato: 11987654321)
  - `favoriteAddressId` (INTEGER, NULL) - Referência ao endereço favorito
  - `createdAt` (TIMESTAMP) - Data de criação
  - `updatedAt` (TIMESTAMP) - Data de atualização

#### Tabela: `ClientAddress`
- **Chave Primária**: `id` (SERIAL)
- **Chave Estrangeira**: `clientId` → `Client.id`
- **Atributos**:
  - `address` (VARCHAR(128)) - Logradouro
  - `number` (INTEGER) - Número
  - `complement` (VARCHAR(128), NULL) - Complemento
  - `neighborhood` (VARCHAR(128)) - Bairro
  - `city` (VARCHAR(128)) - Cidade
  - `state` (CHAR(2)) - Estado (UF)
  - `zipcode` (CHAR(8)) - CEP (sem hífen)
  - `createdAt` (TIMESTAMP)
  - `updatedAt` (TIMESTAMP)

#### Tabela: `Category`
- **Chave Primária**: `id` (SERIAL)
- **Chave Única**: `name` (VARCHAR(128))
- **Atributos**:
  - `description` (VARCHAR(128)) - Descrição da categoria
  - `image` (VARCHAR(256)) - URL da imagem

#### Tabela: `Cupcake`
- **Chave Primária**: `id` (SERIAL)
- **Chave Única**: `name` (VARCHAR(128))
- **Atributos**:
  - `description` (VARCHAR(256)) - Descrição do produto
  - `ingredients` (VARCHAR(256)) - Lista de ingredientes
  - `image` (VARCHAR(256)) - URL da imagem
  - `value` (MONEY) - Preço do produto
- **Relacionamento N:N**: Tabela intermediária `_CupcakeCategory`

#### Tabela: `Store`
- **Chave Primária**: `id` (SERIAL)
- **Atributos**:
  - `name` (VARCHAR(128)) - Nome da loja
  - `address` (VARCHAR(128)) - Logradouro
  - `number` (INTEGER) - Número
  - `complement` (VARCHAR(128), NULL) - Complemento
  - `neighborhood` (VARCHAR(128)) - Bairro
  - `city` (VARCHAR(128)) - Cidade
  - `state` (CHAR(2)) - Estado (UF)
  - `zipcode` (CHAR(8)) - CEP

#### Tabela: `StoreDeliveryRange`
- **Chave Primária**: `id` (SERIAL)
- **Chave Estrangeira**: `storeId` → `Store.id`
- **Atributos**:
  - `initial` (INTEGER) - CEP inicial da faixa
  - `final` (INTEGER) - CEP final da faixa

#### Tabela: `Order`
- **Chave Primária**: `id` (SERIAL)
- **Chaves Estrangeiras**:
  - `clientId` → `Client.id`
  - `addressId` → `ClientAddress.id`
  - `storeId` → `Store.id`
- **Atributos**:
  - `cupcakes` (JSONB) - Array de cupcakes do pedido (id, quantidade, valor)
  - `value` (MONEY) - Valor total do pedido
  - `paymentMethod` (VARCHAR(128)) - Método de pagamento
  - `createdAt` (TIMESTAMP)
  - `updatedAt` (TIMESTAMP)

#### Tabela: `_CupcakeCategory` (Tabela de Relacionamento)
- **Chaves Estrangeiras**:
  - `A` → `Cupcake.id`
  - `B` → `Category.id`
- **Índice Único**: `(A, B)`

## Projeto Físico

### SGBD: PostgreSQL

O banco de dados utiliza PostgreSQL com as seguintes características:

- **Versão mínima**: PostgreSQL 12+
- **Encoding**: UTF-8
- **Schema**: `public`

### Tipos de Dados Utilizados

- **SERIAL**: Auto-incremento para chaves primárias
- **VARCHAR(n)**: Strings de tamanho variável
- **CHAR(n)**: Strings de tamanho fixo
- **INTEGER**: Números inteiros
- **MONEY**: Valores monetários (PostgreSQL nativo)
- **TIMESTAMP**: Data e hora
- **JSONB**: Dados JSON binários (para array de cupcakes no pedido)

### Índices

#### Índices Únicos
- `Client.email`
- `Category.name`
- `Cupcake.name`
- `_CupcakeCategory(A, B)`

#### Índices de Performance
- `_CupcakeCategory.B` (para busca rápida de cupcakes por categoria)

### Constraints

- **Primary Keys**: Todas as tabelas possuem chave primária `id`
- **Foreign Keys**: Todas as relações possuem constraints de integridade referencial
- **NOT NULL**: Campos obrigatórios estão marcados como NOT NULL
- **Unique**: Campos únicos possuem constraint UNIQUE

### Migrations

O projeto utiliza Prisma para gerenciamento de migrations:
- Todas as alterações no schema são versionadas
- Migrations são aplicadas sequencialmente
- Histórico completo disponível em `backend/prisma/migrations/`

### Scripts de Seed

Dados iniciais são populados através do script `backend/prisma/seed.ts`:
- Categorias de cupcakes
- Produtos (cupcakes)
- Lojas e faixas de atendimento

## Considerações de Performance

1. **Índices**: Criados em campos frequentemente consultados
2. **JSONB**: Utilizado para armazenar array de cupcakes no pedido (flexível e performático)
3. **Normalização**: Balanceada entre normalização e performance
4. **Queries**: Otimizadas através de relacionamentos do Prisma

## Segurança

- Validação de dados através de constraints do banco
- Validação de tipos através do Prisma
- Validação de regras de negócio na camada de aplicação

