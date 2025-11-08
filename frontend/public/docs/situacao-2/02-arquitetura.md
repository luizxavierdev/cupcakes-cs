# Arquitetura do Sistema

## Visão Geral

O sistema Cupcakes CS foi desenvolvido seguindo princípios de arquitetura moderna, separando responsabilidades entre frontend e backend.

## Arquitetura Geral

```
┌─────────────────────────────────────────────────────────┐
│                      Cliente (Browser)                    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │           Frontend (Next.js)                    │    │
│  │  - Server Side Rendering (SSR)                  │    │
│  │  - Client Side Rendering (CSR)                  │    │
│  │  - API Routes (opcional)                        │    │
│  └───────────────────┬─────────────────────────────┘    │
└───────────────────────┼─────────────────────────────────┘
                         │
                         │ HTTP/REST
                         │
┌───────────────────────▼─────────────────────────────────┐
│              Backend (NestJS)                            │
│  ┌─────────────────────────────────────────────────┐    │
│  │         Controllers (HTTP)                     │    │
│  └───────────────────┬─────────────────────────────┘    │
│  ┌───────────────────▼─────────────────────────────┐    │
│  │         Services (Business Logic)              │    │
│  └───────────────────┬─────────────────────────────┘    │
│  ┌───────────────────▼─────────────────────────────┐    │
│  │         Gateways (Data Access)                   │    │
│  └───────────────────┬─────────────────────────────┘    │
└───────────────────────┼─────────────────────────────────┘
                        │
                        │ Prisma ORM
                        │
┌───────────────────────▼─────────────────────────────────┐
│              PostgreSQL Database                         │
└──────────────────────────────────────────────────────────┘
```

## Arquitetura do Backend

### Padrão Arquitetural: Hexagonal/DDD Simplificado

O backend segue uma arquitetura inspirada em Hexagonal Architecture e Domain-Driven Design, mas simplificada para facilitar manutenção e entendimento.

```
backend/
├── src/
│   ├── modules/
│   │   ├── client/          # Módulo de Cliente
│   │   │   ├── controllers/ # Camada de apresentação
│   │   │   ├── services/    # Lógica de negócio
│   │   │   ├── gateways/    # Acesso a dados
│   │   │   ├── entities/    # Entidades de domínio
│   │   │   └── dtos/        # Data Transfer Objects
│   │   ├── cupcake/
│   │   ├── order/
│   │   ├── store/
│   │   └── shared/          # Código compartilhado
│   └── app.module.ts
└── prisma/
    ├── schema.prisma        # Schema do banco
    └── migrations/          # Migrations versionadas
```

### Camadas

1. **Controllers**: Recebem requisições HTTP, validam entrada, chamam services
2. **Services**: Contêm a lógica de negócio
3. **Gateways**: Abstraem acesso a dados (Prisma)
4. **Entities**: Representam entidades de domínio

### Princípios Aplicados

- **Separação de Responsabilidades**: Cada camada tem uma responsabilidade clara
- **Dependency Injection**: NestJS gerencia dependências
- **Single Responsibility**: Cada classe tem uma única responsabilidade
- **DRY (Don't Repeat Yourself)**: Código compartilhado em módulo `shared`

## Arquitetura do Frontend

### Padrão: MVVM (Model-View-ViewModel)

O frontend utiliza o padrão MVVM adaptado para React/Next.js:

```
frontend/
├── app/                    # Views (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── category/          # Páginas de categoria
│   ├── account/           # Páginas de conta
│   └── shopping-bag/      # Carrinho
├── components/            # Componentes reutilizáveis
│   ├── atom/             # Componentes atômicos
│   └── molecules/         # Componentes compostos
├── models/                # Models (Entidades)
├── hooks/                 # ViewModels (Custom Hooks)
├── gateways/              # Comunicação com API
└── services/              # Lógica de negócio do frontend
```

### Camadas

1. **View (app/)**: Componentes de página e UI
2. **ViewModel (hooks/)**: Custom hooks que gerenciam estado e lógica
3. **Model (models/)**: Entidades e estruturas de dados
4. **Gateway (gateways/)**: Comunicação com backend

### Princípios Aplicados

- **Componentização**: Componentes reutilizáveis e atômicos
- **Custom Hooks**: Lógica reutilizável encapsulada
- **Separation of Concerns**: Separação clara entre UI, lógica e dados
- **Server Components**: Aproveitamento de SSR do Next.js

## Fluxo de Dados

### Fluxo de Requisição (Backend)

```
HTTP Request
    ↓
Controller (valida entrada)
    ↓
Service (lógica de negócio)
    ↓
Gateway (acesso a dados)
    ↓
Prisma (ORM)
    ↓
PostgreSQL
```

### Fluxo de Dados (Frontend)

```
User Action
    ↓
Component (View)
    ↓
Custom Hook (ViewModel)
    ↓
Gateway (API call)
    ↓
Backend API
    ↓
Update State
    ↓
Re-render Component
```

## Módulos do Sistema

### Módulo: Client
- Gerenciamento de clientes
- CRUD completo
- Busca por email

### Módulo: ClientAddress
- Gerenciamento de endereços
- Validação de CEP
- Relacionamento com Client

### Módulo: Cupcake
- Listagem de produtos
- Busca por categoria
- Detalhes do produto

### Módulo: Order
- Criação de pedidos
- Cálculo de valores
- Histórico de pedidos

### Módulo: Store
- Busca de lojas por região
- Validação de área de atendimento

## Comunicação entre Módulos

- Módulos são independentes
- Comunicação através de interfaces bem definidas
- Código compartilhado no módulo `shared`
- Eventos para comunicação assíncrona (quando necessário)

## Escalabilidade

### Backend
- Arquitetura modular facilita separação em microserviços
- Prisma facilita migração de banco
- NestJS suporta múltiplas estratégias de deploy

### Frontend
- Next.js otimizado para performance
- Server Components reduzem bundle size
- Lazy loading de componentes
- Image optimization automático

## Segurança

- Validação de dados em todas as camadas
- Sanitização de inputs
- Proteção contra SQL injection (Prisma)
- CORS configurado
- Validação de tipos (TypeScript)

## Observações

Esta arquitetura foi escolhida para:
- Facilidade de manutenção
- Testabilidade
- Escalabilidade futura
- Alinhamento com boas práticas modernas
- Compatibilidade com deploy na Vercel

