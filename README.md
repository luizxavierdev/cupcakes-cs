# 🍰 Cupcakes CS - PIT II

> E-commerce de cupcakes gourmet desenvolvido para o Projeto Integrador Transdisciplinar em Engenharia de Software II

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Documentação das Situações](#-documentação-das-situações)
- [Tecnologias](#-tecnologias)
- [Features](#-features)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Arquitetura](#-arquitetura)
- [Banco de Dados](#-banco-de-dados)
- [Deploy](#-deploy)
- [Documentação](#-documentação)

## Sobre o Projeto

O **Cupcakes CS** é um e-commerce completo de cupcakes gourmet desenvolvido como parte do Projeto Integrador Transdisciplinar em Engenharia de Software II (PIT II). O projeto visa colocar em prática os conhecimentos adquiridos durante o PIT I, implementando uma solução funcional de ponta a ponta.

### Objetivo

Construir uma plataforma web completa para comercialização de cupcakes gourmet, permitindo que clientes naveguem por produtos, criem contas, gerenciem endereços de entrega e realizem pedidos online.

### Status do Projeto

✅ **Em desenvolvimento ativo** - Funcionalidades principais implementadas e testadas

---

## Documentação das Situações

Este projeto está organizado conforme as situações-problema do PIT II:

### [Situação 1 - Planejamento](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/README.md)
- ✅ [Escopo e Ideia](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/01-escopo-ideia.md)
- ✅ [Modelagem UML](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/02-modelagem-uml.md)
- ✅ [Interface Humano Computador (IHC)](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/03-ihc.md)
- ✅ [Projeto de Banco de Dados](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/04-banco-dados.md)
- ✅ [Dicionário de Dados](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/05-dicionario-dados.md)

### [Situação 2 - Desenvolvimento](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/README.md)
- ✅ [Repositório Git](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/01-repositorio-git.md)
- ✅ [Arquitetura do Sistema](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/02-arquitetura.md)
- ✅ [Tecnologias Utilizadas](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/03-tecnologias.md)
- ✅ [Configuração de Deploy (Vercel)](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/04-deploy.md)

### [Situação 3 - Testes e Validação](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/README.md)
- ✅ [Testes (Verificação e Validação)](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/01-testes.md)
- ✅ [Formulário de Feedback](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/formulario-feedback.html)
- ✅ [Correções e Melhorias](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/03-correcoes-melhorias.md)
- ✅ [Documentação Final](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/04-documentacao-final.md)
- ✅ [Vídeo de Apresentação](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/05-video-apresentacao.mp4)
- ✅ [Vídeo da Solução](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/Vídeo-da-Solução-atualizada.mp4)

---

## Tecnologias

### Frontend
- **Next.js 14** - Framework React com SSR/SSG
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **NextUI** - Biblioteca de componentes
- **Axios** - Cliente HTTP

### Backend
- **NestJS 10** - Framework Node.js
- **Prisma 5** - ORM type-safe
- **PostgreSQL** - Banco de dados relacional
- **TypeScript** - Tipagem estática

### Infraestrutura
- **Vercel** - Deploy e hospedagem
- **Vercel Postgres** - Banco de dados gerenciado
- **GitHub Actions** - CI/CD
- **Docker Hub** - Registry de imagens

> Veja a [documentação completa de tecnologias](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/03-tecnologias.md)

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
- [ ] Múltiplos endereços (listar, cadastrar novo, trocar de endereço favorito)
- [ ] Repetir pedidos
- [ ] Listar todas lojas e permitir usuário escolher
- [ ] Simular escolha de método de pagamento

---

## Estrutura do Projeto

```
cupcakes-cs/
├── backend/              # API NestJS
│   ├── src/
│   │   ├── modules/      # Módulos da aplicação
│   │   │   ├── client/
│   │   │   ├── cupcake/
│   │   │   ├── order/
│   │   │   ├── store/
│   │   │   └── shared/
│   │   └── app.module.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   └── package.json
├── frontend/            # Aplicação Next.js
│   ├── app/            # App Router (Next.js 14)
│   ├── components/     # Componentes React
│   ├── models/         # Modelos de dados
│   ├── hooks/          # Custom hooks
│   ├── gateways/       # Comunicação com API
│   ├── public/         # Arquivos estáticos
│   │   └── docs/       # Documentação completa
│   │       ├── situacao-1/  # Planejamento
│   │       ├── situacao-2/  # Desenvolvimento
│   │       └── situacao-3/  # Testes e Validação
│   └── package.json
├── vercel.json         # Configuração Vercel
└── README.md
```

---

## Como Executar

### Pré-requisitos

- Node.js 18+ 
- PostgreSQL 12+ (ou Vercel Postgres)
- npm ou yarn

### 1. Clone o repositório

```bash
git clone <repository-url>
cd cupcakes-cs
```

### 2. Configure o Backend

```bash
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# Execute as migrations
npx prisma migrate dev

# Popule o banco com dados iniciais
npx prisma db seed

# Inicie o servidor de desenvolvimento
npm run start:dev
```

O backend estará disponível em `http://localhost:3335`
API Docs (Swagger): `http://localhost:3335/swagger`

### 3. Configure o Frontend

```bash
cd frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o .env.local com a URL da API

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em `http://localhost:3001`

---

## Arquitetura

### Backend - Hexagonal/DDD Simplificado

O backend segue uma arquitetura inspirada em Hexagonal Architecture e Domain-Driven Design, simplificada para facilitar manutenção:

```
Controller (HTTP) → Service (Business Logic) → Gateway (Data Access) → Prisma → PostgreSQL
```

**Módulos**:
- `client` - Gerenciamento de clientes
- `client-address` - Endereços de entrega
- `cupcake` - Catálogo de produtos
- `order` - Pedidos
- `store` - Lojas e áreas de atendimento
- `shared` - Código compartilhado

> Veja a [documentação completa de arquitetura](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/02-arquitetura.md)

### Frontend - MVVM

O frontend utiliza o padrão MVVM adaptado para React/Next.js:

- **View** (`app/`) - Componentes de página e UI
- **ViewModel** (`hooks/`) - Custom hooks que gerenciam estado
- **Model** (`models/`) - Entidades e estruturas de dados
- **Gateway** (`gateways/`) - Comunicação com backend

---

## Banco de Dados

### PostgreSQL

Banco de dados relacional escolhido pela robustez, escalabilidade e facilidade de manutenção.

### Schema Principal

- **Client** - Dados dos clientes
- **ClientAddress** - Endereços de entrega
- **Category** - Categorias de cupcakes
- **Cupcake** - Produtos disponíveis
- **Store** - Lojas físicas
- **StoreDeliveryRange** - Faixas de CEP atendidas
- **Order** - Pedidos realizados

### Diagrama ER

> Veja a [documentação completa do banco de dados](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/04-banco-dados.md) para diagramas e estrutura  
> Veja o [dicionário de dados](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/05-dicionario-dados.md)

### Prisma ORM

Utilizamos Prisma para:
- Type-safe database client
- Migrations versionadas
- Schema management
- Seed de dados iniciais

---

## Deploy

### Vercel

O projeto está configurado para deploy na **Vercel**:

- **Frontend**: Next.js hospedado na Vercel
- **Backend**: API pode ser integrada como API Routes do Next.js ou deploy separado
- **Banco de Dados**: Vercel Postgres

#### Variáveis de Ambiente Necessárias

**Frontend**:
- `NEXT_PUBLIC_API_URL` - URL da API backend
- `NODE_ENV` - Ambiente (production)

**Backend**:
- `DATABASE_URL` - Connection string do PostgreSQL
- `PORT` - Porta do servidor
- `NODE_ENV` - Ambiente (production)

> Veja a [documentação completa de deploy](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/04-deploy.md)

### CI/CD

O projeto utiliza **GitHub Actions** para:
- Build automático
- Testes automatizados
- Publicação de imagens Docker no Docker Hub

---

## Documentação

### Documentação Completa

Toda a documentação está organizada no diretório `frontend/public/docs/` e acessível de duas formas:

- **No repositório GitHub**: Use os links relativos no README (ex: `https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/...`)
- **Na aplicação web**: Acesse via `/docs/` quando a aplicação estiver rodando (ex: `http://localhost:3001/docs/...`)

> **Nota**: Os links no README apontam para o caminho no repositório. Na aplicação em produção, acesse via `/docs/`

---

### Índice Completo da Documentação

#### Situação 1 - Planejamento

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/README.md) - Índice e visão geral da Situação 1
- [01-escopo-ideia.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/01-escopo-ideia.md) - Escopo, objetivos e requisitos do projeto
- [02-modelagem-uml.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/02-modelagem-uml.md) - Diagramas UML (Classes, Casos de Uso, Sequência, Atividades)
- [03-ihc.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/03-ihc.md) - Interface Humano Computador (Telas, Protótipos, Mensagens)
- [04-banco-dados.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/04-banco-dados.md) - Projeto de Banco de Dados (Conceitual, Lógico, Físico)
- [05-dicionario-dados.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/05-dicionario-dados.md) - Dicionário completo de dados

**Diagramas e Artefatos**:
- `cupcakes-cs - diagrama-de-classes.png` - Diagrama de Classes UML
- `Diagrama-de-Caso-de-UsoCupcakes-CS--Com-conta.png.png` - Diagrama de Casos de Uso (com conta)
- `Diagrama-de-Caso-de-UsoCupcakes-CS--Sem-conta.png` - Diagrama de Casos de Uso (sem conta)
- `cupcakes-cs-diagram-use-case-with-account.html` - Diagrama interativo HTML (com conta)
- `cupcakes-cs-diagram-use-case-without-account.html` - Diagrama interativo HTML (sem conta)
- `cupcakes-cs-diagrams-use.html` - Diagramas interativos HTML
- `Histórias-de-Usuário-para-o-Sistema-de-Loja-Virtual-de-Cupcakes.png` - Histórias de Usuário

**Protótipos e Screenshots Desktop** (`cupcakes-cs-desktop/`):
- `Adicionar-endereço.png` - Tela de cadastro de endereço
- `carrinho.png` - Tela do carrinho de compras
- `categorias.png` - Tela de categorias
- `Criar-conta.png` - Tela de criação de conta
- `Login.png` - Tela de login
- `pedido-finalizado.png` - Tela de pedido finalizado
- `homer.png` - Protótipo Homer
- `homer1.png` - Protótipo Homer (alternativo)
- `cupcakes-cs-desktop.mp4` - Vídeo demonstrativo desktop

**Vídeos Mobile** (`cupcakes-cs-mobile/`):
- `cupcakes-cs-Mobile.mp4` - Vídeo demonstrativo mobile (MP4)
- `cupcakes-cs-Mobile.webm` - Vídeo demonstrativo mobile (WebM)

**Documentos Adicionais**:
- `testes.png` - Imagem relacionada a testes

---

#### Situação 2 - Desenvolvimento

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/README.md) - Índice e visão geral da Situação 2
- [01-repositorio-git.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/01-repositorio-git.md) - Informações sobre o repositório Git, branches e commits
- [02-arquitetura.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/02-arquitetura.md) - Arquitetura do sistema (Backend e Frontend)
- [03-tecnologias.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/03-tecnologias.md) - Stack tecnológico completo utilizado
- [04-deploy.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/04-deploy.md) - Configuração de deploy na Vercel

---

#### Situação 3 - Testes e Validação

**Documentos Markdown**:
- [README.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/README.md) - Índice e visão geral da Situação 3
- [01-testes.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/01-testes.md) - Documentação de testes (Unitários, Integração, E2E)
- [02-formulario-feedback.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/02-formulario-feedback.md) - Documentação do formulário de feedback
- [03-correcoes-melhorias.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/03-correcoes-melhorias.md) - Correções e melhorias implementadas
- [04-documentacao-final.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/04-documentacao-final.md) - Documentação final e índice completo
- [05-video-apresentacao.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/05-video-apresentacao.md) - Guia para vídeo de apresentação

**Formulário Interativo**:
- `formulario-feedback.html` - Formulário HTML interativo para coleta de feedback

---

### Resumo Estatístico da Documentação

| Categoria | Quantidade |
|-----------|------------|
| **Documentos Markdown** | 16 arquivos |
| **Diagramas e Imagens** | 10 arquivos |
| **Vídeos** | 3 arquivos |
| **Diagramas HTML Interativos** | 3 arquivos |
| **Formulários HTML** | 1 arquivo |
| **Documentos PDF/DOCX** | 2 arquivos |
| **Screenshots** | 8 imagens |
| **Total de Arquivos** | 43+ arquivos |

---

### Como Navegar na Documentação

**Para Avaliadores**:

1. **Início Rápido**: Comece pelo [README da Situação 1](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-1/README.md) para entender o planejamento
2. **Arquitetura**: Veja [02-arquitetura.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/02-arquitetura.md) para entender a estrutura técnica
3. **Tecnologias**: Consulte [03-tecnologias.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-2/03-tecnologias.md) para ver o stack completo
4. **Testes**: Revise [01-testes.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/01-testes.md) para verificar a cobertura de testes
5. **Correções**: Veja [03-correcoes-melhorias.md](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/03-correcoes-melhorias.md) para entender as melhorias implementadas

**Ordem Recomendada de Leitura**:
1. Situação 1 → Planejamento completo
2. Situação 2 → Desenvolvimento e arquitetura
3. Situação 3 → Testes, validação e correções

### Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação NestJS](https://docs.nestjs.com)
- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação Vercel](https://vercel.com/docs)

---

## Notas Importantes

### Dados Fictícios

> **Aviso**: Todos os dados usados nas Seeds de produtos, categorias, descrições, sabores e ingredientes são fictícios.

### Projeto Didático

Este é um projeto acadêmico desenvolvido para fins educacionais como parte do PIT II.

---

## Contribuição

Este é um projeto acadêmico, mas sugestões e feedback são bem-vindos!

Para reportar bugs ou sugerir melhorias:
1. Abra uma issue no repositório
2. Ou use o [formulário de feedback](https://cupcakes-cs-frontend-g6ilw5uk7-luizxavierdevs-projects.vercel.app/docs/situacao-3/formulario-feedback.html)

---

## Licença

Este é um projeto acadêmico desenvolvido para fins educacionais.

---

## Agradecimentos

Desenvolvido para o **PIT II - Projeto Integrador Transdisciplinar em Engenharia de Software II**

---

