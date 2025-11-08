# Escopo e Ideia do Projeto

## Visão Geral

O projeto **Cupcakes CS** é um e-commerce de cupcakes gourmet desenvolvido como parte do Projeto Integrador Transdisciplinar em Engenharia de Software II (PIT II).

## Objetivo

Desenvolver uma plataforma web completa para comercialização de cupcakes gourmet, permitindo que clientes:
- Naveguem por categorias e produtos
- Criem contas e gerenciem endereços de entrega
- Realizem pedidos online
- Acompanhem seus pedidos

## Escopo do Projeto

### Funcionalidades Principais

#### Módulo de Cliente
- ✅ Cadastro de cliente (nome, email, telefone)
- ✅ Login por email
- ✅ Gerenciamento de endereços de entrega
- ✅ Visualização de pedidos realizados

#### Módulo de Produtos
- ✅ Listagem de cupcakes por categoria
- ✅ Visualização de detalhes do produto
- ✅ Busca e filtros

#### Módulo de Pedidos
- ✅ Carrinho de compras
- ✅ Criação de pedidos
- ✅ Seleção de loja por região de atendimento
- ✅ Histórico de pedidos

#### Módulo de Lojas
- ✅ Listagem de lojas por região (CEP)
- ✅ Informações de endereço das lojas

### Tecnologias Utilizadas

#### Backend
- **Framework**: NestJS
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Arquitetura**: Hexagonal/DDD simplificado

#### Frontend
- **Framework**: Next.js 14
- **Padrão**: MVVM
- **Estilização**: Tailwind CSS + NextUI

#### Infraestrutura
- **Hospedagem Frontend**: Vercel
- **Hospedagem Backend**: Vercel (Serverless Functions) ou plataforma compatível
- **Banco de Dados**: Vercel Postgres ou serviço compatível

## Limitações e Considerações

### Escopo Excluído (Futuro)
- Sistema de pagamento real (atualmente simulado)
- Gestão de estoque por loja
- Sistema de avaliações
- Programa de fidelidade
- Múltiplos endereços favoritos
- Repetir pedidos anteriores

### Premissas
- Projeto didático, não comercial
- Dados de produtos são fictícios (gerados por IA)
- Imagens são geradas por IA e não podem ser usadas comercialmente
- Foco na funcionalidade e aprendizado, não em otimizações de performance extremas

## Público-Alvo

- Clientes interessados em cupcakes gourmet
- Usuários que desejam realizar pedidos online
- Projeto acadêmico para demonstração de conhecimentos em engenharia de software

## Entregas Esperadas

1. ✅ Sistema funcional de e-commerce
2. ✅ API REST documentada (Swagger)
3. ✅ Interface web responsiva
4. ✅ Documentação completa do projeto
5. ✅ Testes automatizados
6. ✅ Deploy em produção (Vercel)

