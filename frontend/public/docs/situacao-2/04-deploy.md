# Configuração de Deploy

## Visão Geral

O projeto será hospedado na **Vercel**, tanto para o frontend quanto para o backend (utilizando Serverless Functions do Next.js ou API Routes).

## Frontend - Vercel

### Configuração

O frontend Next.js está configurado para deploy na Vercel.

#### Arquivo: `vercel.json` (se necessário)

```json
{
  "buildCommand": "cd frontend && npm run build",
  "outputDirectory": "frontend/.next",
  "framework": "nextjs",
  "installCommand": "cd frontend && npm install"
}
```

#### Variáveis de Ambiente

Configurar na Vercel:
- `NEXT_PUBLIC_API_URL`: URL da API backend
- `NODE_ENV`: `production`

### Deploy

1. Conectar repositório Git à Vercel
2. Configurar variáveis de ambiente
3. Deploy automático a cada push na branch `main`

## Backend - Vercel Serverless Functions

### Opção 1: API Routes do Next.js

Integrar o backend como API Routes no Next.js:

```
frontend/
├── app/
│   └── api/          # API Routes
│       ├── client/
│       ├── cupcake/
│       ├── order/
│       └── store/
```

### Opção 2: Deploy Separado

Se necessário manter backend separado:

1. Converter NestJS para Serverless Functions compatíveis
2. Ou usar Vercel para deploy de aplicação Node.js

## Banco de Dados - Vercel Postgres

### Configuração

1. Criar banco de dados Vercel Postgres no dashboard
2. Obter connection string
3. Configurar variável de ambiente `DATABASE_URL`

### Migrations

Executar migrations do Prisma:

```bash
cd backend
npx prisma migrate deploy
```

### Seed (Opcional)

Popular banco com dados iniciais:

```bash
cd backend
npx prisma db seed
```

## Variáveis de Ambiente

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://seu-backend.vercel.app/api
NODE_ENV=production
```

### Backend (.env)

```env
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
PORT=3000
```

## Checklist de Deploy

- [ ] Repositório conectado à Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados criado e configurado
- [ ] Migrations executadas
- [ ] Seed executado (se necessário)
- [ ] Testes de integração realizados
- [ ] URLs de produção testadas
- [ ] Documentação atualizada com URLs de produção

## URLs de Produção

Após o deploy, atualizar:
- README.md com URLs de produção
- Documentação com links corretos
- Swagger/API docs com URL de produção

## Monitoramento

- Vercel Analytics (opcional)
- Logs de erro
- Performance monitoring

## Rollback

Em caso de problemas:
1. Acessar dashboard Vercel
2. Selecionar deployment anterior
3. Fazer rollback

## Notas

- Vercel oferece deploy automático a cada push
- Preview deployments para cada PR
- SSL automático
- CDN global incluído

