# Dicionário de Dados

Este documento descreve todas as tabelas, campos, tipos de dados, constraints e relacionamentos do banco de dados do sistema Cupcakes CS.

## Tabela: Client

**Descrição**: Armazena os dados dos clientes cadastrados no sistema.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único do cliente (auto-incremento) |
| email | VARCHAR | 128 | Sim | UK | Email do cliente (único no sistema) |
| firstName | VARCHAR | 64 | Sim | - | Primeiro nome do cliente |
| lastName | VARCHAR | 64 | Sim | - | Sobrenome do cliente |
| phone | CHAR | 11 | Sim | - | Telefone do cliente (formato: 11987654321) |
| favoriteAddressId | INTEGER | - | Não | FK | ID do endereço favorito do cliente (referência a ClientAddress.id) |
| createdAt | TIMESTAMP | - | Sim | - | Data e hora de criação do registro |
| updatedAt | TIMESTAMP | - | Sim | - | Data e hora da última atualização do registro |

**Relacionamentos**:
- 1:N com `ClientAddress` (um cliente pode ter múltiplos endereços)
- 1:N com `Order` (um cliente pode realizar múltiplos pedidos)

**Índices**:
- PK: `id`
- UK: `email`
- FK: `favoriteAddressId` → `ClientAddress.id`

---

## Tabela: ClientAddress

**Descrição**: Armazena os endereços de entrega dos clientes.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único do endereço (auto-incremento) |
| clientId | INTEGER | - | Sim | FK | ID do cliente proprietário do endereço |
| address | VARCHAR | 128 | Sim | - | Logradouro (rua, avenida, etc.) |
| number | INTEGER | - | Sim | - | Número do endereço |
| complement | VARCHAR | 128 | Não | - | Complemento do endereço (apto, bloco, etc.) |
| neighborhood | VARCHAR | 128 | Sim | - | Bairro |
| city | VARCHAR | 128 | Sim | - | Cidade |
| state | CHAR | 2 | Sim | - | Estado (UF) - formato: SP, RJ, MG, etc. |
| zipcode | CHAR | 8 | Sim | - | CEP (sem hífen, apenas números) |
| createdAt | TIMESTAMP | - | Sim | - | Data e hora de criação do registro |
| updatedAt | TIMESTAMP | - | Sim | - | Data e hora da última atualização do registro |

**Relacionamentos**:
- N:1 com `Client` (múltiplos endereços pertencem a um cliente)
- 1:N com `Order` (um endereço pode ser usado em múltiplos pedidos)

**Índices**:
- PK: `id`
- FK: `clientId` → `Client.id`

**Regras de Negócio**:
- Um cliente pode ter múltiplos endereços
- O CEP deve conter apenas números (8 dígitos)
- O estado deve ser uma sigla válida de 2 caracteres

---

## Tabela: Category

**Descrição**: Armazena as categorias de cupcakes disponíveis no sistema.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único da categoria (auto-incremento) |
| name | VARCHAR | 128 | Sim | UK | Nome da categoria (único no sistema) |
| description | VARCHAR | 128 | Sim | - | Descrição da categoria |
| image | VARCHAR | 256 | Sim | - | URL da imagem representativa da categoria |

**Relacionamentos**:
- N:N com `Cupcake` (uma categoria pode ter múltiplos cupcakes, um cupcake pode estar em múltiplas categorias)

**Índices**:
- PK: `id`
- UK: `name`

**Regras de Negócio**:
- O nome da categoria deve ser único
- A imagem deve ser uma URL válida

---

## Tabela: Cupcake

**Descrição**: Armazena os produtos (cupcakes) disponíveis para venda.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único do cupcake (auto-incremento) |
| name | VARCHAR | 128 | Sim | UK | Nome do cupcake (único no sistema) |
| description | VARCHAR | 256 | Sim | - | Descrição detalhada do produto |
| ingredients | VARCHAR | 256 | Sim | - | Lista de ingredientes do cupcake |
| image | VARCHAR | 256 | Sim | - | URL da imagem do produto |
| value | MONEY | - | Sim | - | Preço do cupcake |

**Relacionamentos**:
- N:N com `Category` (um cupcake pode pertencer a múltiplas categorias)

**Índices**:
- PK: `id`
- UK: `name`

**Regras de Negócio**:
- O nome do cupcake deve ser único
- O valor deve ser maior que zero
- A imagem deve ser uma URL válida

---

## Tabela: Store

**Descrição**: Armazena as lojas físicas que realizam as entregas.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único da loja (auto-incremento) |
| name | VARCHAR | 128 | Sim | - | Nome da loja |
| address | VARCHAR | 128 | Sim | - | Logradouro da loja |
| number | INTEGER | - | Sim | - | Número do endereço da loja |
| complement | VARCHAR | 128 | Não | - | Complemento do endereço |
| neighborhood | VARCHAR | 128 | Sim | - | Bairro da loja |
| city | VARCHAR | 128 | Sim | - | Cidade da loja |
| state | CHAR | 2 | Sim | - | Estado (UF) da loja |
| zipcode | CHAR | 8 | Sim | - | CEP da loja (sem hífen) |

**Relacionamentos**:
- 1:N com `StoreDeliveryRange` (uma loja pode atender múltiplas faixas de CEP)
- 1:N com `Order` (uma loja pode atender múltiplos pedidos)

**Índices**:
- PK: `id`

---

## Tabela: StoreDeliveryRange

**Descrição**: Define as faixas de CEP atendidas por cada loja.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único da faixa (auto-incremento) |
| storeId | INTEGER | - | Sim | FK | ID da loja que atende esta faixa |
| initial | INTEGER | - | Sim | - | CEP inicial da faixa de atendimento |
| final | INTEGER | - | Sim | - | CEP final da faixa de atendimento |

**Relacionamentos**:
- N:1 com `Store` (múltiplas faixas pertencem a uma loja)

**Índices**:
- PK: `id`
- FK: `storeId` → `Store.id`

**Regras de Negócio**:
- O CEP inicial deve ser menor ou igual ao CEP final
- Os CEPs devem conter apenas números (sem hífen)
- Uma loja pode ter múltiplas faixas de atendimento

---

## Tabela: Order

**Descrição**: Armazena os pedidos realizados pelos clientes.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| id | INTEGER | - | Sim | PK | Identificador único do pedido (auto-incremento) |
| clientId | INTEGER | - | Sim | FK | ID do cliente que realizou o pedido |
| addressId | INTEGER | - | Sim | FK | ID do endereço de entrega |
| storeId | INTEGER | - | Sim | FK | ID da loja que atenderá o pedido |
| cupcakes | JSONB | - | Sim | - | Array JSON com os cupcakes do pedido: `[{id, quantity, value}]` |
| value | MONEY | - | Sim | - | Valor total do pedido |
| paymentMethod | VARCHAR | 128 | Sim | - | Método de pagamento escolhido |
| createdAt | TIMESTAMP | - | Sim | - | Data e hora de criação do pedido |
| updatedAt | TIMESTAMP | - | Sim | - | Data e hora da última atualização do pedido |

**Relacionamentos**:
- N:1 com `Client` (múltiplos pedidos pertencem a um cliente)
- N:1 com `ClientAddress` (múltiplos pedidos podem usar o mesmo endereço)
- N:1 com `Store` (múltiplos pedidos são atendidos por uma loja)

**Índices**:
- PK: `id`
- FK: `clientId` → `Client.id`
- FK: `addressId` → `ClientAddress.id`
- FK: `storeId` → `Store.id`

**Estrutura do Campo `cupcakes` (JSONB)**:
```json
[
  {
    "id": 1,
    "quantity": 2,
    "value": "25.50"
  },
  {
    "id": 3,
    "quantity": 1,
    "value": "15.00"
  }
]
```

**Regras de Negócio**:
- O valor total deve ser a soma dos valores dos cupcakes multiplicados pelas quantidades
- O método de pagamento deve ser um valor válido (ex: "credit_card", "debit_card", "pix", etc.)
- O endereço de entrega deve pertencer ao cliente que realizou o pedido
- A loja deve atender o CEP do endereço de entrega

---

## Tabela: _CupcakeCategory

**Descrição**: Tabela de relacionamento N:N entre Cupcake e Category.

| Campo | Tipo | Tamanho | Obrigatório | Chave | Descrição |
|-------|------|---------|-------------|-------|-----------|
| A | INTEGER | - | Sim | FK | ID do cupcake (referência a Cupcake.id) |
| B | INTEGER | - | Sim | FK | ID da categoria (referência a Category.id) |

**Relacionamentos**:
- N:1 com `Cupcake` (múltiplas relações pertencem a um cupcake)
- N:1 com `Category` (múltiplas relações pertencem a uma categoria)

**Índices**:
- PK Composta: `(A, B)`
- FK: `A` → `Cupcake.id`
- FK: `B` → `Category.id`
- Índice: `B` (para busca rápida de cupcakes por categoria)

**Regras de Negócio**:
- A combinação (A, B) deve ser única
- Não pode haver duplicatas da mesma relação

---

## Convenções e Padrões

### Nomenclatura
- Tabelas: PascalCase (ex: `ClientAddress`)
- Campos: camelCase (ex: `firstName`, `createdAt`)
- Chaves Primárias: sempre `id`
- Chaves Estrangeiras: `{tabela}Id` (ex: `clientId`, `storeId`)
- Timestamps: `createdAt`, `updatedAt`

### Tipos de Dados
- **INTEGER**: Números inteiros
- **VARCHAR(n)**: Strings de tamanho variável até n caracteres
- **CHAR(n)**: Strings de tamanho fixo de n caracteres
- **MONEY**: Valores monetários (PostgreSQL)
- **TIMESTAMP**: Data e hora
- **JSONB**: Dados JSON binários (PostgreSQL)

### Constraints
- **PK**: Primary Key (chave primária)
- **FK**: Foreign Key (chave estrangeira)
- **UK**: Unique Key (chave única)
- **NOT NULL**: Campo obrigatório
- **NULL**: Campo opcional

### Validações
- Email: formato válido de email
- Telefone: 11 dígitos (formato brasileiro)
- CEP: 8 dígitos numéricos
- Estado: 2 caracteres (sigla da UF)
- Valores monetários: sempre positivos

