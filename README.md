# 🍰 Cupcakes CS - PIT II

> E-commerce de cupcakes gourmet desenvolvido para o Projeto Integrador Transdisciplinar em Engenharia de Software II

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Documentação das Situações](#documentação-das-situações)
- [Tecnologias](#tecnologias)
- [Features](#features)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Arquitetura](#arquitetura)
- [Banco de Dados](#banco-de-dados)
- [Deploy](#deploy)
- [Documentação](#documentação)
- [Testes](#testes)
- [Notas Importantes](#notas-importantes)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

## Sobre o Projeto

O **Cupcakes CS** é um e-commerce completo de cupcakes gourmet desenvolvido como parte do Projeto Integrador Transdisciplinar em Engenharia de Software II (PIT II). O projeto visa colocar em prática os conhecimentos adquiridos durante o PIT I, implementando uma solução funcional de ponta a ponta.

### Objetivo

Construir uma plataforma web completa para comercialização de cupcakes gourmet, permitindo que clientes naveguem por produtos, criem contas, gerenciem endereços de entrega e realizem pedidos online.

### Status do Projeto

✅ **Em desenvolvimento ativo** - Funcionalidades principais implementadas e testadas

---

## Documentação das Situações

Este projeto está organizado conforme as situações-problema do PIT II:

### [Situação 1 - Planejamento](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/README.md)
- ✅ [Escopo e Ideia](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/01-escopo-ideia.md)
- ✅ [Modelagem UML](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/02-modelagem-uml.md)
- ✅ [Interface Humano Computador (IHC)](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/03-ihc.md)
- ✅ [Projeto de Banco de Dados](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/04-banco-dados.md)
- ✅ [Dicionário de Dados](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/05-dicionario-dados.md)

### [Situação 2 - Desenvolvimento](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/README.md)
- ✅ [Repositório Git](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/01-repositorio-git.md)
- ✅ [Arquitetura do Sistema](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/02-arquitetura.md)
- ✅ [Tecnologias Utilizadas](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/03-tecnologias.md)
- ✅ [Configuração de Deploy (Vercel)](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/04-deploy.md)

### [Situação 3 - Testes e Validação](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/README.md)
- ✅ [Testes (Verificação e Validação)](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/01-testes.md)
- ✅ [Formulário de Feedback](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/formulario-feedback.html)
- ✅ [Correções e Melhorias](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/03-correcoes-melhorias.md)
- ✅ [Documentação Final](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/04-documentacao-final.md)
- ✅ [Vídeo de Apresentação](https://cupcakes-cs-frontend.vercel.app/video-apresentacao)
- ✅ [Vídeo da Solução](https://cupcakes-cs-frontend.vercel.app/video-solucao)

---

## Tecnologias

### Frontend
- **Next.js 14** - Framework React com App Router e SSR/SSG
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 3** - Framework CSS utility-first
- **NextUI 2** - Biblioteca de componentes React
- **Framer Motion** - Biblioteca de animações
- **Axios** - Cliente HTTP
- **Zod** - Validação de schemas
- **js-cookie** - Gerenciamento de cookies
- **next-themes** - Gerenciamento de temas (claro/escuro)

### Backend
- **NestJS 10** - Framework Node.js progressivo
- **Prisma 5** - ORM type-safe
- **PostgreSQL** - Banco de dados relacional
- **TypeScript 5** - Tipagem estática
- **Swagger/OpenAPI** - Documentação da API
- **class-validator** - Validação de DTOs
- **class-transformer** - Transformação de dados

### Infraestrutura
- **Vercel** - Deploy e hospedagem (Frontend e Backend)
- **Vercel Postgres** - Banco de dados gerenciado
- **Git** - Controle de versão
- **Yarn** - Gerenciador de pacotes
- **Concurrently** - Execução simultânea de scripts

### Ferramentas de Desenvolvimento
- **ESLint** - Linter de código
- **Prettier** - Formatador de código
- **Jest** - Framework de testes
- **Testing Library** - Testes de componentes React
- **Prisma Studio** - Interface visual para o banco de dados

> Veja a [documentação completa de tecnologias](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/03-tecnologias.md)

---

## Features

### Backend

- [x] CRUD - Cliente
- [x] CRUD - Endereço do cliente
- [x] Listar cupcakes
- [x] Listar Categorias
- [x] Criar/Listar Pedidos
- [x] Listar Estabelecimentos por endereço
- [x] Listar Estabelecimentos por área de atendimento
- [x] Documentação Swagger completa
- [x] Health check endpoint
- [ ] Criar/Editar/Deletar cupcakes
- [ ] Criar/Editar/Deletar Categorias
- [ ] Criar/Editar/Deletar Estabelecimentos
- [ ] Vínculo Estoque(cupcakes)-Estabelecimento

### Frontend

- [x] Home - Landing Page com ofertas, cupcakes e categorias
- [x] Listar categorias
- [x] Listar cupcakes de uma categoria
- [x] Login (buscar conta por email)
- [x] Criar usuário
- [x] Auto-completar endereço
- [x] Cadastrar endereço
- [x] Resumo do usuário / logout
- [x] Carrinho (adicionar/remover item, limpar carrinho, realizar compra)
- [x] Lojas por região do usuário
- [x] Listar pedidos realizados
- [x] Suporte a temas claro/escuro
- [x] Internacionalização (i18n) - Português/Inglês
- [ ] Múltiplos endereços (listar, cadastrar novo, trocar de endereço favorito)
- [ ] Repetir pedidos
- [ ] Listar todas lojas e permitir usuário escolher
- [ ] Simular escolha de método de pagamento

---

## Estrutura do Projeto

Este é um **monorepo** gerenciado com scripts na raiz:

```
cupcakes-cs/
├── backend/                    # API NestJS
│   ├── api/                   # Entry point para Vercel (serverless)
│   ├── prisma/                # Schema e migrações do Prisma
│   │   ├── migrations/        # Migrações versionadas
│   │   ├── seeds/             # Scripts de seed
│   │   │   ├── categories.ts
│   │   │   ├── cupcakes.ts
│   │   │   ├── stores.ts
│   │   │   └── data/          # Dados JSON para seed
│   │   └── schema.prisma      # Schema do banco de dados
│   ├── src/
│   │   ├── modules/           # Módulos da aplicação
│   │   │   ├── client/         # Módulo de clientes
│   │   │   │   ├── controllers/
│   │   │   │   ├── create/
│   │   │   │   ├── list/
│   │   │   │   ├── get-by-id/
│   │   │   │   └── update/
│   │   │   │   ├── gateways/
│   │   │   │   └── exceptions/
│   │   │   ├── client-address/ # Módulo de endereços
│   │   │   ├── cupcake/        # Módulo de cupcakes
│   │   │   ├── order/          # Módulo de pedidos
│   │   │   │   └── entities/   # Entidades de domínio
│   │   │   ├── store/          # Módulo de lojas
│   │   │   └── shared/         # Módulo compartilhado
│   │   │       ├── gateways/   # Prisma Gateway
│   │   │       ├── services/   # Serviços compartilhados
│   │   │       └── enums/      # Enumeradores
│   │   ├── app.controller.ts  # Controller principal
│   │   ├── app.module.ts      # Módulo raiz
│   │   └── main.ts            # Bootstrap da aplicação
│   ├── test/                  # Testes E2E
│   ├── vercel.json             # Configuração do Vercel
│   └── package.json
├── frontend/                   # Aplicação Next.js
│   ├── app/                   # App Router (Next.js 14)
│   │   ├── account/           # Módulo de conta/autenticação
│   │   │   ├── [accountId]/   # Páginas dinâmicas
│   │   │   ├── actions/       # Server Actions
│   │   │   ├── components/    # Componentes específicos
│   │   │   ├── create/        # Criação de conta
│   │   │   └── login/         # Login
│   │   ├── address/           # Módulo de endereços
│   │   ├── api/               # API Routes (proxies)
│   │   │   ├── address/
│   │   │   ├── cupcake/
│   │   │   ├── order/
│   │   │   └── store/
│   │   ├── category/          # Páginas de categorias
│   │   │   ├── [categoryId]/  # Cupcakes de uma categoria
│   │   │   └── components/    # Componentes de categoria
│   │   ├── docs/              # Documentação (rotas dinâmicas)
│   │   │   └── [...path]/     # Rotas dinâmicas para docs
│   │   ├── order/             # Módulo de pedidos
│   │   │   └── components/    # Componentes de pedido
│   │   ├── shopping-bag/      # Carrinho de compras
│   │   │   ├── actions/       # Server Actions
│   │   │   └── components/    # Componentes do carrinho
│   │   ├── video-apresentacao/ # Página do vídeo de apresentação
│   │   ├── video-solucao/      # Página do vídeo da solução
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Página inicial
│   │   ├── providers.tsx      # Providers globais
│   │   ├── error.tsx          # Página de erro
│   │   └── not-found.tsx       # Página 404
│   ├── components/            # Componentes reutilizáveis
│   │   ├── atom/              # Componentes atômicos
│   │   │   ├── button.tsx
│   │   │   ├── icons/         # Ícones customizados
│   │   │   └── LinkWithLoading.tsx
│   │   └── molecules/          # Componentes moleculares
│   │       ├── carousel.tsx
│   │       ├── Footer/
│   │       ├── language-switch.tsx
│   │       ├── navbar.tsx
│   │       ├── shopping-bag.tsx
│   │       └── theme-switch.tsx
│   ├── config/                # Arquivos de configuração
│   │   ├── data-translations.ts
│   │   ├── fonts.ts
│   │   ├── i18n.ts
│   │   ├── promotion-banners.ts
│   │   ├── site.ts
│   │   └── translations.ts
│   ├── contexts/              # Contexts React
│   │   ├── language-context.tsx
│   │   ├── loading-context.tsx
│   │   └── shopping-bag.context.tsx
│   ├── gateways/              # Camada de acesso à API
│   │   ├── api.ts            # Cliente HTTP base
│   │   ├── account-address.gateway.ts
│   │   ├── account.gateway.ts
│   │   ├── cupcake.gateway.ts
│   │   ├── order.gateway.ts
│   │   └── store.gateway.ts
│   ├── hooks/                 # Custom Hooks
│   │   ├── use-create-order.tsx
│   │   ├── use-fetch-address.tsx
│   │   ├── use-fetch-cupcake.tsx
│   │   ├── use-fetch-store.tsx
│   │   └── use-translations.tsx
│   ├── models/                # Modelos de dados
│   │   ├── account-address.model.ts
│   │   ├── account.mode.ts
│   │   ├── category.model.ts
│   │   ├── cupcake.model.ts
│   │   ├── currency-vo.ts
│   │   ├── order-cupcake.model.ts
│   │   ├── order.model.ts
│   │   ├── shopping-bag.model.ts
│   │   └── store.model.ts
│   ├── services/              # Serviços de negócio
│   │   └── shopping-cart.service.ts
│   ├── styles/                # Estilos globais
│   │   └── globals.css
│   ├── types/                 # Tipos TypeScript
│   │   ├── cache-tag.enum.ts
│   │   ├── cookies-keys.enum.ts
│   │   └── storage-keys.enum.ts
│   ├── utils/                 # Utilitários
│   │   ├── shuffle.ts
│   │   └── state-uf.contant.ts
│   ├── public/               # Arquivos estáticos
│   │   └── docs/             # Documentação completa
│   │       ├── situacao-1/   # Planejamento
│   │       ├── situacao-2/    # Desenvolvimento
│   │       ├── situacao-3/    # Testes e Validação
│   │       └── ...            # Diagramas, vídeos, etc.
│   ├── vercel.json            # Configuração do Vercel
│   └── package.json
├── package.json               # Scripts do monorepo
└── README.md
```

---

## Como Executar

### Pré-requisitos

- **Node.js 22.x**
- **Yarn >= 1.22.19** (recomendado) ou npm
- **PostgreSQL 12+** (ou Vercel Postgres para produção)
- **Git**

### 1. Clone o repositório

```bash
git clone <repository-url>
cd cupcakes-cs
```

### 2. Instale as dependências

#### Opção A: Instalar tudo de uma vez (recomendado)

```bash
# Na raiz do projeto
yarn install:all
```

#### Opção B: Instalar separadamente

```bash
# Backend
yarn install:backend
# ou
cd backend && yarn install

# Frontend
yarn install:frontend
# ou
cd frontend && yarn install
```

### 3. Configure o Backend

```bash
cd backend

# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env com suas configurações
# DATABASE_URL="postgresql://user:password@localhost:5432/cupcakes_cs?schema=public"
# PORT=3335
# HOST=http://localhost:3335
# NODE_ENV=development

# Execute as migrations
npx prisma migrate dev

# Popule o banco com dados iniciais
npx prisma db seed

# (Opcional) Abra o Prisma Studio para visualizar os dados
npx prisma studio
```

### 4. Configure o Frontend

```bash
cd frontend

# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite o .env.local com a URL da API
# NEXT_PUBLIC_API_URL=http://localhost:3335
# ou
# BACKEND_URL=http://localhost:3335
```

### 5. Execute o projeto

#### Opção A: Executar tudo de uma vez (recomendado)

```bash
# Na raiz do projeto
yarn dev
```

Isso iniciará:
- **Backend** em `http://localhost:3335`
- **Frontend** em `http://localhost:3001`

#### Opção B: Executar separadamente

```bash
# Terminal 1 - Backend
yarn dev:backend
# ou
cd backend && yarn start:dev

# Terminal 2 - Frontend
yarn dev:frontend
# ou
cd frontend && yarn dev
```

### 6. Acesse a aplicação

- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3335
- **Swagger Docs**: http://localhost:3335/swagger
- **Prisma Studio**: http://localhost:5555 (se executado)

### Scripts Disponíveis (Raiz do Projeto)

| Script | Descrição |
|--------|-----------|
| `yarn dev` | Executa frontend e backend simultaneamente |
| `yarn dev:backend` | Executa apenas o backend |
| `yarn dev:frontend` | Executa apenas o frontend |
| `yarn install:all` | Instala dependências de ambos os projetos |
| `yarn install:backend` | Instala dependências do backend |
| `yarn install:frontend` | Instala dependências do frontend |
| `yarn build` | Build de ambos os projetos |
| `yarn build:backend` | Build apenas do backend |
| `yarn build:frontend` | Build apenas do frontend |
| `yarn lint` | Executa linter em ambos os projetos |
| `yarn lint:backend` | Executa linter do backend |
| `yarn lint:frontend` | Executa linter do frontend |

---

## Arquitetura

### Backend - Hexagonal/DDD Simplificado

O backend segue uma arquitetura inspirada em Hexagonal Architecture e Domain-Driven Design, simplificada para facilitar manutenção:

```
Controller (HTTP) → Command (Business Logic) → Gateway (Data Access) → Prisma → PostgreSQL
```

**Módulos**:
- `client` - Gerenciamento de clientes (CRUD completo)
- `client-address` - Endereços de entrega (CRUD completo)
- `cupcake` - Catálogo de produtos (listagem)
- `order` - Pedidos (criação e listagem)
- `store` - Lojas e áreas de atendimento (listagem)
- `shared` - Código compartilhado (Prisma Gateway, serviços, enums)

**Padrões Utilizados**:
- **Command Pattern** - Para operações de negócio
- **Repository Pattern** - Para acesso a dados (via Gateways)
- **Gateway Pattern** - Para abstração de repositórios
- **DTO (Data Transfer Object)** - Para transferência de dados
- **Decorators** - Para tratamento de eventos e headers

> Veja a [documentação completa de arquitetura](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/02-arquitetura.md)

### Frontend - MVVM Adaptado

O frontend utiliza o padrão MVVM adaptado para React/Next.js:

- **View** (`app/`) - Componentes de página e UI (Server Components)
- **ViewModel** (`hooks/`) - Custom hooks que gerenciam estado e lógica
- **Model** (`models/`) - Entidades e estruturas de dados
- **Gateway** (`gateways/`) - Comunicação com backend
- **Service** (`services/`) - Lógica de negócio (ex: shopping cart)

**Padrões Utilizados**:
- **Server Components** - Para renderização no servidor
- **Client Components** - Para interatividade no cliente
- **Context API** - Para gerenciamento de estado global
- **Custom Hooks** - Para lógica reutilizável
- **Atomic Design** - Para organização de componentes

---

## Banco de Dados

### PostgreSQL

Banco de dados relacional escolhido pela robustez, escalabilidade e facilidade de manutenção.

### Schema Principal

- **Client** - Dados dos clientes (email, nome, telefone)
- **ClientAddress** - Endereços de entrega (CEP, rua, número, complemento, cidade, estado)
- **Category** - Categorias de cupcakes (nome, descrição, imagem)
- **Cupcake** - Produtos disponíveis (nome, descrição, preço, imagem, categorias)
- **Store** - Lojas físicas (nome, endereço, telefone)
- **StoreDeliveryRange** - Faixas de CEP atendidas por cada loja
- **Order** - Pedidos realizados (cliente, endereço, loja, status, total)
- **OrderCupcake** - Itens do pedido (cupcake, quantidade, preço)

### Diagrama ER

> Veja a [documentação completa do banco de dados](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/04-banco-dados.md) para diagramas e estrutura  
> Veja o [dicionário de dados](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/05-dicionario-dados.md)

### Prisma ORM

Utilizamos Prisma para:
- Type-safe database client
- Migrations versionadas
- Schema management
- Seed de dados iniciais
- Prisma Studio para visualização de dados

**Comandos úteis**:
```bash
# Gerar Prisma Client
npx prisma generate

# Criar nova migration
npx prisma migrate dev --name nome_da_migration

# Aplicar migrations em produção
npx prisma migrate deploy

# Abrir Prisma Studio
npx prisma studio

# Executar seed
npx prisma db seed
```

---

## Deploy

### Vercel

O projeto está configurado para deploy na **Vercel** com builds condicionais:

- **Frontend**: Next.js hospedado na Vercel
- **Backend**: API serverless no Vercel
- **Banco de Dados**: Vercel Postgres

#### Builds Condicionais

O projeto utiliza `ignoreCommand` nos arquivos `vercel.json` para otimizar builds:

- **Frontend**: Só faz build se houver mudanças em `frontend/`, `package.json` ou `yarn.lock`
- **Backend**: Só faz build se houver mudanças em `backend/`, `package.json` ou `yarn.lock`

Isso reduz tempo de build e custos, evitando builds desnecessários.

#### Variáveis de Ambiente Necessárias

**Frontend** (no painel do Vercel):
- `NEXT_PUBLIC_API_URL` - URL da API backend (ex: `https://cupcakes-cs-backend.vercel.app`)
- `NODE_ENV` - production` (automático)

**Backend** (no painel do Vercel):
- `DATABASE_URL` - Connection string do PostgreSQL (fornecido pelo Vercel Postgres)
- `PORT` - Porta do servidor (opcional, padrão: 3335)
- `HOST` - URL base da API (opcional)
- `NODE_ENV` - `production` (automático)

#### URLs de Produção

- **Frontend**: https://cupcakes-cs-frontend.vercel.app
- **Backend API**: https://cupcakes-cs-backend.vercel.app
- **Swagger Docs**: https://cupcakes-cs-backend.vercel.app/swagger

> Veja a [documentação completa de deploy](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/04-deploy.md)

### CI/CD

O projeto utiliza **Git** para controle de versão e **Vercel** para CI/CD automático:
- Build automático a cada push
- Deploy automático após build bem-sucedido
- Builds condicionais para otimização

---

## Documentação

### Documentação Completa

Toda a documentação está organizada no diretório `frontend/public/docs/` e acessível de duas formas:

- **Na aplicação web**: Acesse via `/docs/` quando a aplicação estiver rodando (ex: `http://localhost:3001/docs/...`)
- **Em produção**: https://cupcakes-cs-frontend.vercel.app/docs/...

### Índice Completo da Documentação

#### Situação 1 - Planejamento

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/README.md) - Índice e visão geral da Situação 1
- [01-escopo-ideia.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/01-escopo-ideia.md) - Escopo, objetivos e requisitos do projeto
- [02-modelagem-uml.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/02-modelagem-uml.md) - Diagramas UML (Classes, Casos de Uso, Sequência, Atividades)
- [03-ihc.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/03-ihc.md) - Interface Humano Computador (Telas, Protótipos, Mensagens)
- [04-banco-dados.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/04-banco-dados.md) - Projeto de Banco de Dados (Conceitual, Lógico, Físico)
- [05-dicionario-dados.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/05-dicionario-dados.md) - Dicionário completo de dados

**Diagramas e Artefatos**:
- Diagramas de Classes UML
- Diagramas de Casos de Uso (com e sem conta)
- Diagramas interativos HTML
- Histórias de Usuário
- Protótipos e Screenshots Desktop/Mobile
- Vídeos demonstrativos

#### Situação 2 - Desenvolvimento

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/README.md) - Índice e visão geral da Situação 2
- [01-repositorio-git.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/01-repositorio-git.md) - Informações sobre o repositório Git, branches e commits
- [02-arquitetura.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/02-arquitetura.md) - Arquitetura do sistema (Backend e Frontend)
- [03-tecnologias.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/03-tecnologias.md) - Stack tecnológico completo utilizado
- [04-deploy.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/04-deploy.md) - Configuração de deploy na Vercel

#### Situação 3 - Testes e Validação

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/README.md) - Índice e visão geral da Situação 3
- [01-testes.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/01-testes.md) - Documentação de testes (Unitários, Integração, E2E)
- [02-formulario-feedback.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/02-formulario-feedback.md) - Documentação do formulário de feedback
- [03-correcoes-melhorias.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/03-correcoes-melhorias.md) - Correções e melhorias implementadas
- [04-documentacao-final.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/04-documentacao-final.md) - Documentação final e índice completo

**Vídeos**:
- [Vídeo de Apresentação](https://cupcakes-cs-frontend.vercel.app/video-apresentacao)
- [Vídeo da Solução](https://cupcakes-cs-frontend.vercel.app/video-solucao)

**Formulário Interativo**:
- [Formulário de Feedback](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/formulario-feedback.html)

### Como Navegar na Documentação

**Para Avaliadores**:

1. **Início Rápido**: Comece pelo [README da Situação 1](https://cupcakes-cs-frontend.vercel.app/docs/situacao-1/README.md) para entender o planejamento
2. **Arquitetura**: Veja [02-arquitetura.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/02-arquitetura.md) para entender a estrutura técnica
3. **Tecnologias**: Consulte [03-tecnologias.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-2/03-tecnologias.md) para ver o stack completo
4. **Testes**: Revise [01-testes.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/01-testes.md) para verificar a cobertura de testes
5. **Correções**: Veja [03-correcoes-melhorias.md](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/03-correcoes-melhorias.md) para entender as melhorias implementadas

**Ordem Recomendada de Leitura**:
1. Situação 1 → Planejamento completo
2. Situação 2 → Desenvolvimento e arquitetura
3. Situação 3 → Testes, validação e correções

### Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação NestJS](https://docs.nestjs.com)
- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação NextUI](https://nextui.org/)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)

---

## Testes

### Backend

```bash
cd backend

# Testes unitários
yarn test

# Testes em modo watch
yarn test:watch

# Testes E2E
yarn test:e2e

# Cobertura de testes
yarn test:cov

# Testes em CI
yarn test:ci
```

### Frontend

```bash
cd frontend

# Executar testes
yarn test

# Testes em modo watch
yarn test:watch

# Cobertura de testes
yarn test:coverage
```

> Veja a [documentação completa de testes](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/01-testes.md)

---

## Notas Importantes

### Dados Fictícios

> **Aviso**: Todos os dados usados nas Seeds de produtos, categorias, descrições, sabores e ingredientes são fictícios.

### Projeto Didático

Este é um projeto acadêmico desenvolvido para fins educacionais como parte do PIT II.

### Segurança

- Arquivos `.env` não são versionados (estão no `.gitignore`)
- Validação de dados com `class-validator` (backend) e `Zod` (frontend)
- CORS configurado no backend
- Cookies seguros para autenticação
- Sanitização de inputs

---

## Contribuição

Este é um projeto acadêmico, mas sugestões e feedback são bem-vindos!

Para reportar bugs ou sugerir melhorias:
1. Abra uma issue no repositório
2. Ou use o [formulário de feedback](https://cupcakes-cs-frontend.vercel.app/docs/situacao-3/formulario-feedback.html)

---

## Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

---

## Agradecimentos

Desenvolvido para o **PIT II - Projeto Integrador Transdisciplinar em Engenharia de Software II**

---
