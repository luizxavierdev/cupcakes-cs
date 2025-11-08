# Cupcakes CS - Frontend

Frontend web desenvolvido com Next.js para o sistema de loja virtual de cupcakes.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Deploy](#deploy)

## Sobre o Projeto

Aplicação web responsiva para uma loja virtual de cupcakes, permitindo que os clientes:
- Naveguem pelo catálogo de cupcakes e categorias
- Criem e gerenciem suas contas
- Adicionem produtos ao carrinho de compras
- Realizem pedidos online
- Acompanhem seus pedidos

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Linguagem de programação tipada
- **NextUI** - Biblioteca de componentes React
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Axios** - Cliente HTTP
- **Zod** - Validação de schemas
- **js-cookie** - Gerenciamento de cookies
- **Vercel** - Plataforma de deploy

## Arquitetura

O projeto segue os princípios de **Atomic Design** e **Clean Architecture**:

### Estrutura de Componentes

- **Atoms** - Componentes básicos e reutilizáveis (Button, Icons, Link)
- **Molecules** - Componentes compostos (Navbar, Footer, Carousel, ShoppingBag)
- **Organisms** - Componentes complexos (páginas e layouts)

### Padrões Utilizados

- **Server Components** - Para renderização no servidor
- **Client Components** - Para interatividade no cliente
- **Context API** - Para gerenciamento de estado global (ShoppingBag, Loading)
- **Custom Hooks** - Para lógica reutilizável
- **Gateway Pattern** - Para abstração de chamadas à API
- **Service Layer** - Para lógica de negócio (shopping cart)

## Pré-requisitos

- Node.js 22.x
- npm ou yarn
- Conta no Vercel (para deploy)

## Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# API Backend URL
NEXT_PUBLIC_API_URL=https://cupcakes-cs-backend.vercel.app
# ou
BACKEND_URL=https://cupcakes-cs-backend.vercel.app
```

**Nota:** A variável `NEXT_PUBLIC_API_URL` tem prioridade sobre `BACKEND_URL`. Se a URL não tiver protocolo (`https://`), será adicionado automaticamente.

## Executando o Projeto

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

O servidor estará disponível em `http://localhost:3001`

### Build para Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm run start
# ou
yarn start
```

### Limpeza

```bash
# Limpar arquivos gerados e dependências
npm run clean
# ou
yarn clean
```

## Estrutura do Projeto

```
frontend/
├── app/                    # App Router do Next.js
│   ├── account/           # Módulo de conta/autenticação
│   │   ├── [accountId]/   # Páginas dinâmicas de conta
│   │   ├── actions/       # Server Actions
│   │   ├── components/    # Componentes específicos
│   │   ├── create/        # Criação de conta
│   │   └── login/         # Login
│   ├── address/           # Módulo de endereços
│   ├── api/               # API Routes (proxies)
│   ├── category/          # Páginas de categorias
│   ├── order/             # Módulo de pedidos
│   ├── shopping-bag/      # Carrinho de compras
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── providers.tsx      # Providers globais
├── components/            # Componentes reutilizáveis
│   ├── atom/             # Componentes atômicos
│   └── molecules/         # Componentes moleculares
├── config/                # Arquivos de configuração
│   ├── fonts.ts          # Configuração de fontes
│   ├── promotion-banners.ts  # Banners promocionais
│   └── site.ts            # Configuração do site
├── contexts/              # Contexts React
│   ├── loading-context.tsx
│   └── shopping-bag.context.tsx
├── gateways/              # Camada de acesso à API
│   ├── api.ts            # Cliente HTTP base
│   ├── account.gateway.ts
│   ├── cupcake.gateway.ts
│   ├── order.gateway.ts
│   └── store.gateway.ts
├── hooks/                 # Custom Hooks
│   ├── use-create-order.tsx
│   ├── use-fetch-address.tsx
│   ├── use-fetch-cupcake.tsx
│   └── use-fetch-store.tsx
├── models/                # Modelos de dados
├── services/              # Serviços de negócio
│   └── shopping-cart.service.ts
├── styles/               # Estilos globais
│   └── globals.css
├── types/                 # Tipos TypeScript
├── utils/                 # Utilitários
└── public/               # Arquivos estáticos
```

## Funcionalidades

### Páginas Principais

- **Home (`/`)** - Página inicial com cupcakes em destaque e categorias
- **Categorias (`/category`)** - Lista todas as categorias disponíveis
- **Categoria Específica (`/category/[categoryId]`)** - Cupcakes de uma categoria
- **Carrinho (`/shopping-bag`)** - Gerenciamento do carrinho de compras
- **Pedidos (`/order`)** - Histórico de pedidos do cliente
- **Conta (`/account`)** - Gerenciamento de conta do cliente
- **Endereços (`/address/create`)** - Cadastro de endereços

### Funcionalidades do Carrinho

- Adicionar/remover produtos
- Persistência no localStorage
- Cálculo automático de totais
- Validação de endereço antes do checkout
- Integração com API de lojas por CEP

### Autenticação

- Criação de conta
- Login
- Gerenciamento de sessão com cookies
- Logout

## Melhorias Implementadas

### API Gateway

- ✅ Validação automática de protocolo na URL da API
- ✅ Tratamento seguro de erros JSON
- ✅ Verificação de Content-Type antes do parse
- ✅ Mensagens de erro mais descritivas

### UX/UI

- ✅ Botão de cadastro de endereço quando não há endereço cadastrado
- ✅ Melhorias na ordem de ações (adicionar ao carrinho antes de navegar)
- ✅ Descrição melhorada do site para SEO

### Performance

- ✅ Rotas dinâmicas para evitar pré-renderização desnecessária
- ✅ Tratamento de erros durante o build
- ✅ Cache de requisições com Next.js tags

## Deploy

### Vercel

O projeto está configurado para deploy no Vercel:

1. Conecte seu repositório ao Vercel
2. Configure a variável de ambiente `NEXT_PUBLIC_API_URL` no painel do Vercel
3. O deploy é automático a cada push para a branch principal

### Configuração do Vercel

O arquivo `vercel.json` contém:
- Configuração do framework Next.js
- Comandos de build e instalação
- Diretório de output

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa o linter |
| `npm run clean` | Remove arquivos gerados e dependências |

## Customização

### Temas

O projeto usa NextUI com suporte a temas claro/escuro. O tema padrão é escuro e pode ser alterado no arquivo `app/layout.tsx`.

### Cores e Estilos

As cores e estilos são configuradas através do Tailwind CSS e podem ser customizadas em:
- `tailwind.config.js` - Configuração do Tailwind
- `styles/globals.css` - Estilos globais

### Configuração do Site

Edite `config/site.ts` para alterar:
- Nome do site
- Descrição
- Itens de navegação
- Links

## Segurança

- Validação de dados com Zod
- Sanitização de inputs
- Proteção contra XSS
- Cookies seguros para autenticação
- CORS configurado no backend

## Responsividade

O projeto é totalmente responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## Testes

```bash
# Executar testes (quando implementados)
npm run test
```

## Licença

Este projeto é privado e não possui licença pública.

## Autores

- Desenvolvido para o Projeto Integrador Transdisciplinar em Engenharia de Software II

## Suporte

Para questões ou problemas, abra uma issue no repositório do projeto.

## Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação NextUI](https://nextui.org/)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação React](https://react.dev/)
