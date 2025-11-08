# Cupcakes CS - Backend API

Backend REST API desenvolvido com NestJS para o sistema de loja virtual de cupcakes.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Endpoints](#api-endpoints)
- [Documentação Swagger](#documentação-swagger)
- [Testes](#testes)
- [Deploy](#deploy)

## Sobre o Projeto

API RESTful para gerenciamento de uma loja virtual de cupcakes, incluindo:
- Gerenciamento de clientes e endereços
- Catálogo de cupcakes e categorias
- Sistema de pedidos
- Gerenciamento de lojas e áreas de entrega

## Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Linguagem de programação
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Swagger/OpenAPI** - Documentação da API
- **Jest** - Framework de testes
- **Vercel** - Plataforma de deploy serverless

## Arquitetura

O projeto segue os princípios de **Clean Architecture** e **DDD (Domain-Driven Design)**:

### Módulos

- **Client** - Gerenciamento de clientes
- **ClientAddress** - Endereços dos clientes
- **Cupcake** - Catálogo de cupcakes e categorias
- **Order** - Sistema de pedidos
- **Store** - Gerenciamento de lojas
- **Shared** - Módulo compartilhado com abstrações, decorators e serviços comuns

### Padrões Utilizados

- **Command Pattern** - Para operações de negócio
- **Repository Pattern** - Para acesso a dados
- **Gateway Pattern** - Para abstração de repositórios
- **DTO (Data Transfer Object)** - Para transferência de dados
- **Decorators** - Para tratamento de eventos e headers

## Pré-requisitos

- Node.js 22.x
- Yarn >= 1.22.19
- PostgreSQL
- Conta no Vercel (para deploy)

## Instalação

```bash
# Instalar dependências
yarn install
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database (obrigatório)
DATABASE_URL="postgresql://user:password@localhost:5432/cupcakes_cs?schema=public"

# Ou configure separadamente:
# DB_HOST=localhost
# DB_USERNAME=postgres
# DB_PASSWORD=password
# DB_DATABASE=cupcakes_cs
# DB_LOGGING=false

# Application
NODE_ENV=development
PORT=3335
HOST=http://localhost:3335
```

**Nota:** As variáveis `npm_package_name`, `npm_package_description` e `npm_package_version` são automaticamente preenchidas pelo npm a partir do `package.json`.

### Configuração do Banco de Dados

```bash
# Executar migrações
yarn prisma:migrate:deploy

# Gerar Prisma Client
yarn prisma:generate

# (Opcional) Abrir Prisma Studio
yarn prisma:studio
```

## Executando o Projeto

### Desenvolvimento

```bash
# Modo watch (recompila automaticamente)
yarn start:dev

# Modo debug
yarn start:debug

# Modo produção local
yarn build
yarn start:prod
```

### Build

```bash
# Build para produção
yarn build

# Build para deploy (inclui migrações)
yarn build:deploy
```

## Estrutura do Projeto

```
backend/
├── api/                    # Entry point para Vercel
├── prisma/                 # Schema e migrações do Prisma
│   ├── migrations/
│   ├── seeds/
│   └── schema.prisma
├── src/
│   ├── modules/            # Módulos da aplicação
│   │   ├── client/         # Módulo de clientes
│   │   ├── client-address/ # Módulo de endereços
│   │   ├── cupcake/        # Módulo de cupcakes
│   │   ├── order/          # Módulo de pedidos
│   │   ├── store/          # Módulo de lojas
│   │   └── shared/         # Módulo compartilhado
│   ├── app.controller.ts   # Controller principal
│   ├── app.module.ts       # Módulo raiz
│   └── main.ts             # Bootstrap da aplicação
├── test/                   # Testes E2E
├── vercel.json             # Configuração do Vercel
└── package.json
```

### Estrutura de um Módulo

```
module/
├── controllers/            # Controllers e Commands
│   ├── create/
│   │   ├── create.command.ts
│   │   └── create.controller.ts
│   ├── list/
│   ├── get-by-id/
│   └── update/
├── dtos/                   # Data Transfer Objects
├── gateways/               # Repositórios (abstração)
├── exceptions/             # Exceções customizadas
├── services/               # Serviços de negócio (se houver)
└── module.module.ts        # Definição do módulo NestJS
```

## API Endpoints

### Health Check

```
GET /app/health-check
```

Retorna informações sobre o status da aplicação.

### Clientes

- `POST /client` - Criar cliente
- `GET /client` - Listar clientes
- `GET /client/:clientId` - Obter cliente por ID
- `PATCH /client/:clientId` - Atualizar cliente

### Endereços

- `POST /client/:clientId/address` - Criar endereço
- `GET /client-address` - Listar endereços
- `GET /client-address/:clientAddressId` - Obter endereço por ID
- `PATCH /client-address/:clientAddressId` - Atualizar endereço

### Cupcakes

- `GET /cupcake` - Listar cupcakes
- `GET /cupcake/category` - Listar categorias

### Pedidos

- `POST /client/:clientId/order` - Criar pedido
- `GET /order` - Listar pedidos
- `GET /order/:orderId` - Obter pedido por ID

### Lojas

- `GET /store` - Listar lojas

## Documentação Swagger

A documentação completa da API está disponível via Swagger em **desenvolvimento e produção**:

### Desenvolvimento
```
http://localhost:3335/swagger
```

### Produção
```
https://cupcakes-cs-backend.vercel.app/swagger
```

### Recursos do Swagger

O Swagger fornece:
- Documentação interativa de todos os endpoints
- Schemas de request/response
- Possibilidade de testar endpoints diretamente na interface
- Busca e filtros de endpoints
- Exemplos de requisições e respostas

**Nota:** O Swagger está habilitado em produção para facilitar a integração e testes da API.

### Troubleshooting

Se os recursos estáticos (CSS, JS) do Swagger não estiverem carregando corretamente no Vercel:

1. **Verifique o console do navegador** para erros de carregamento de recursos
2. **Acesse diretamente o JSON do Swagger**: `https://cupcakes-cs-backend.vercel.app/swagger-json`
3. **Limpe o cache do navegador** e tente novamente
4. **Verifique se a função serverless está respondendo corretamente** através do health-check: `https://cupcakes-cs-backend.vercel.app/app/health-check`

**Nota:** O Swagger está configurado em `/swagger` (não `/api`) para evitar conflitos com as funções serverless do Vercel. Os recursos estáticos (CSS, JS) são carregados via CDN (unpkg.com) em produção para garantir funcionamento correto no ambiente serverless.

## Testes

```bash
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

## Deploy

### Vercel

O projeto está configurado para deploy no Vercel:

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. O deploy é automático a cada push para a branch principal

### Build Command

```bash
yarn vercel-build
```

Este comando:
1. Executa as migrações do Prisma
2. Gera o Prisma Client
3. Compila o projeto TypeScript

### Configuração do Vercel

O arquivo `vercel.json` contém:
- Configuração da função serverless
- Rewrites para rotas
- Configuração de build

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `yarn start` | Inicia o servidor em modo produção |
| `yarn start:dev` | Inicia em modo desenvolvimento com watch |
| `yarn start:debug` | Inicia em modo debug |
| `yarn build` | Compila o projeto |
| `yarn build:deploy` | Build para deploy (com migrações) |
| `yarn vercel-build` | Build específico para Vercel |
| `yarn test` | Executa testes unitários |
| `yarn test:e2e` | Executa testes E2E |
| `yarn lint` | Executa o linter |
| `yarn format` | Formata o código com Prettier |
| `yarn prisma:generate` | Gera o Prisma Client |
| `yarn prisma:migrate:deploy` | Executa migrações |
| `yarn prisma:studio` | Abre o Prisma Studio |

## Segurança

- Validação de dados com `class-validator`
- Transformação de dados com `class-transformer`
- CORS habilitado para todas as origens (configurável)
- Tratamento de erros padronizado

## Licença

Este projeto é privado e não possui licença pública.

## Autores

- Desenvolvido para o Projeto Integrador Transdisciplinar em Engenharia de Software II

## Suporte

Para questões ou problemas, abra uma issue no repositório do projeto.
