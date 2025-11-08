# Interface Humano Computador (IHC)

Este documento descreve os elementos de IHC do sistema Cupcakes CS, incluindo telas, mensagens de erro, mapas conceituais e protótipos.

## Princípios de Design

### Usabilidade
- Interface intuitiva e fácil de navegar
- Feedback visual claro para ações do usuário
- Consistência visual em todas as telas
- Responsividade para diferentes tamanhos de tela

### Acessibilidade
- Contraste adequado de cores
- Textos legíveis
- Navegação por teclado
- Estrutura semântica HTML

### Experiência do Usuário
- Fluxo de compra simplificado
- Informações claras sobre produtos
- Processo de cadastro rápido
- Feedback imediato de ações

## Mapas Conceituais

### Estrutura de Navegação

```
                    [Home]
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    [Categorias]   [Produtos]    [Carrinho]
        │              │              │
        │              │              │
    [Categoria]    [Detalhes]    [Checkout]
    [Específica]   [Produto]         │
                                    │
                            ┌───────┴───────┐
                            │               │
                        [Login]      [Cadastro]
                            │               │
                            └───────┬───────┘
                                    │
                            [Minha Conta]
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
            [Endereços]      [Pedidos]      [Logout]
```

### Fluxo de Compra

```
[Home] → [Categoria/Produto] → [Adicionar ao Carrinho]
                                           │
                                           ↓
                                    [Ver Carrinho]
                                           │
                                           ↓
                                    {Cliente Logado?}
                                           │
                        ┌──────────────────┴──────────────────┐
                        │                                     │
                        NO                                    SIM
                        │                                     │
                        ↓                                     ↓
                [Criar Conta/Login]                    [Selecionar Endereço]
                        │                                     │
                        └──────────────────┬──────────────────┘
                                           │
                                           ↓
                                    [Selecionar Loja]
                                           │
                                           ↓
                                    [Método de Pagamento]
                                           │
                                           ↓
                                    [Confirmar Pedido]
                                           │
                                           ↓
                                    [Pedido Confirmado]
```

## Telas do Sistema

### 1. Home / Landing Page

**Descrição**: Página inicial com ofertas, cupcakes em destaque e categorias.

**Elementos**:
- Header com logo e navegação
- Banner de promoções (carrossel)
- Seção de categorias
- Seção de cupcakes em destaque
- Footer com informações

**Ações Disponíveis**:
- Navegar para categorias
- Visualizar detalhes de cupcakes
- Adicionar ao carrinho
- Acessar carrinho
- Fazer login/cadastro

**Screenshots**: `docs/cupcakes-cs-desktop/` (homer.png, homer1.png)

---

### 2. Listagem de Categorias

**Descrição**: Exibe todas as categorias de cupcakes disponíveis.

**Elementos**:
- Grid de cards de categorias
- Cada card contém: imagem, nome, descrição
- Botão "Ver Produtos" em cada card

**Ações Disponíveis**:
- Clicar em categoria para ver produtos
- Voltar para home

**Screenshots**: `docs/cupcakes-cs-desktop/categorias.png`

---

### 3. Listagem de Cupcakes (por Categoria)

**Descrição**: Exibe cupcakes de uma categoria específica.

**Elementos**:
- Grid de cards de cupcakes
- Cada card contém: imagem, nome, preço
- Botão "Adicionar ao Carrinho"
- Filtros (se aplicável)

**Ações Disponíveis**:
- Visualizar detalhes do cupcake
- Adicionar ao carrinho
- Voltar para categorias

---

### 4. Carrinho de Compras

**Descrição**: Exibe itens adicionados ao carrinho e permite gerenciamento.

**Elementos**:
- Lista de itens no carrinho
- Quantidade de cada item (aumentar/diminuir)
- Botão remover item
- Subtotal e total
- Botão "Finalizar Compra"

**Ações Disponíveis**:
- Alterar quantidade
- Remover item
- Limpar carrinho
- Finalizar compra
- Continuar comprando

**Screenshots**: `docs/cupcakes-cs-desktop/carrinho.png`

---

### 5. Login

**Descrição**: Tela de login do cliente.

**Elementos**:
- Campo de email
- Botão "Entrar"
- Link "Criar conta"

**Validações**:
- Email deve ser válido
- Email deve estar cadastrado

**Mensagens de Erro**:
- "Email não encontrado"
- "Email inválido"

**Ações Disponíveis**:
- Fazer login
- Ir para cadastro
- Voltar para home

**Screenshots**: `docs/cupcakes-cs-desktop/Login.png`

---

### 6. Criar Conta

**Descrição**: Tela de cadastro de novo cliente.

**Elementos**:
- Campo: Nome
- Campo: Sobrenome
- Campo: Email
- Campo: Telefone
- Botão "Criar Conta"
- Link "Já tenho conta"

**Validações**:
- Todos os campos obrigatórios
- Email válido e único
- Telefone no formato correto (11 dígitos)

**Mensagens de Erro**:
- "Email já cadastrado"
- "Preencha todos os campos"
- "Telefone inválido"

**Ações Disponíveis**:
- Criar conta
- Ir para login
- Voltar para home

**Screenshots**: `docs/cupcakes-cs-desktop/Criar-conta.png`

---

### 7. Cadastrar Endereço

**Descrição**: Tela para cadastrar endereço de entrega.

**Elementos**:
- Campo: CEP (com busca automática)
- Campo: Logradouro (preenchido automaticamente)
- Campo: Número
- Campo: Complemento (opcional)
- Campo: Bairro (preenchido automaticamente)
- Campo: Cidade (preenchido automaticamente)
- Campo: Estado (preenchido automaticamente)
- Botão "Salvar Endereço"

**Validações**:
- CEP válido (8 dígitos)
- Todos os campos obrigatórios preenchidos

**Mensagens de Erro**:
- "CEP inválido"
- "CEP não encontrado"
- "Preencha todos os campos obrigatórios"

**Ações Disponíveis**:
- Buscar endereço por CEP
- Salvar endereço
- Cancelar

**Screenshots**: `docs/cupcakes-cs-desktop/Adicionar-endereço.png`

---

### 8. Minha Conta

**Descrição**: Área do cliente logado.

**Elementos**:
- Informações do cliente (nome, email, telefone)
- Lista de endereços cadastrados
- Botão "Adicionar Endereço"
- Link "Meus Pedidos"
- Botão "Sair"

**Ações Disponíveis**:
- Adicionar novo endereço
- Ver pedidos
- Editar perfil (futuro)
- Sair da conta

---

### 9. Meus Pedidos

**Descrição**: Histórico de pedidos do cliente.

**Elementos**:
- Lista de pedidos realizados
- Cada pedido mostra: data, valor, status, itens
- Botão "Ver Detalhes" em cada pedido

**Ações Disponíveis**:
- Ver detalhes do pedido
- Voltar para minha conta

---

### 10. Pedido Finalizado

**Descrição**: Tela de confirmação após finalizar pedido.

**Elementos**:
- Mensagem de sucesso
- Número do pedido
- Resumo do pedido
- Botão "Ver Meus Pedidos"
- Botão "Continuar Comprando"

**Ações Disponíveis**:
- Ver pedidos
- Continuar comprando
- Voltar para home

**Screenshots**: `docs/cupcakes-cs-desktop/pedido-finalizado.png`

## Mensagens de Erro

### Mensagens de Validação

| Situação | Mensagem |
|----------|----------|
| Email inválido | "Por favor, insira um email válido" |
| Email já cadastrado | "Este email já está cadastrado. Faça login ou use outro email" |
| Campos obrigatórios | "Preencha todos os campos obrigatórios" |
| CEP inválido | "CEP inválido. Digite 8 dígitos" |
| CEP não encontrado | "CEP não encontrado. Verifique o CEP digitado" |
| Telefone inválido | "Telefone inválido. Digite 11 dígitos (DDD + número)" |
| Carrinho vazio | "Seu carrinho está vazio. Adicione produtos para continuar" |
| Produto não encontrado | "Produto não encontrado" |
| Erro ao criar pedido | "Erro ao processar pedido. Tente novamente" |
| Loja não encontrada | "Nenhuma loja atende sua região. Verifique o CEP" |

### Mensagens de Sucesso

| Situação | Mensagem |
|----------|----------|
| Conta criada | "Conta criada com sucesso! Você já pode fazer login" |
| Login realizado | "Login realizado com sucesso!" |
| Endereço cadastrado | "Endereço cadastrado com sucesso!" |
| Item adicionado ao carrinho | "Produto adicionado ao carrinho" |
| Item removido do carrinho | "Produto removido do carrinho" |
| Pedido criado | "Pedido realizado com sucesso! Número do pedido: #123" |

### Mensagens de Informação

| Situação | Mensagem |
|----------|----------|
| Carrinho atualizado | "Carrinho atualizado" |
| Quantidade alterada | "Quantidade alterada" |
| Carregando | "Carregando..." |
| Buscando endereço | "Buscando endereço..." |

## Protótipos

### Protótipos Disponíveis

1. **Desktop**: 
   - Screenshots em `docs/cupcakes-cs-desktop/`
   - Vídeo: `docs/cupcakes-cs-desktop/cupcakes-cs-desktop.mp4`
   - Vídeo WebM: `docs/cupcakes-cs-desktop/cupcakes-cs-desktop.webm`

2. **Mobile**:
   - Vídeo: `docs/cupcakes-cs-mobile/cupcakes-cs-Mobile.mp4`
   - Vídeo WebM: `docs/cupcakes-cs-mobile/cupcakes-cs-Mobile.webm`

### Elementos de Design

#### Cores
- **Primária**: Cor principal da marca (definida no tema)
- **Secundária**: Cor de destaque
- **Sucesso**: Verde para ações positivas
- **Erro**: Vermelho para mensagens de erro
- **Aviso**: Amarelo/Laranja para alertas
- **Info**: Azul para informações

#### Tipografia
- **Títulos**: Fonte bold, tamanho maior
- **Corpo**: Fonte regular, tamanho padrão
- **Botões**: Fonte medium/semibold

#### Componentes
- Cards com sombra sutil
- Botões com hover effect
- Inputs com focus state
- Loading states
- Modais para confirmações

## Responsividade

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptações por Dispositivo

#### Mobile
- Menu hambúrguer
- Cards em coluna única
- Botões em largura total
- Formulários otimizados para toque

#### Tablet
- Grid de 2 colunas
- Menu expandido
- Cards em grid responsivo

#### Desktop
- Grid de 3-4 colunas
- Menu horizontal completo
- Layout otimizado para mouse

## Acessibilidade

### Recursos Implementados

- Navegação por teclado
- Labels descritivos em formulários
- Contraste adequado (WCAG AA)
- Estrutura semântica HTML
- Alt text em imagens
- ARIA labels onde necessário

## Melhorias Futuras

- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)
- [ ] Animações mais suaves
- [ ] Feedback tátil (mobile)
- [ ] PWA (Progressive Web App)
- [ ] Notificações push
- [ ] Busca avançada de produtos
- [ ] Filtros mais robustos

