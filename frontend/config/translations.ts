import { Language } from "@/contexts/language-context";

export const translations = {
  pt: {
    // Navegação
    nav: {
      account: "Conta",
      login: "Entrar",
      cart: "Carrinho",
      orders: "Pedidos",
      categories: "Categorias",
    },

    // Formulários
    forms: {
      email: "E-mail",
      name: "Nome",
      lastName: "Sobrenome",
      phone: "Telefone",
      address: "Endereço",
      number: "Número",
      complement: "Complemento",
      neighborhood: "Bairro",
      city: "Cidade",
      state: "Estado",
      zipcode: "CEP",
      saveAsMain: "Salvar como endereço principal",
    },

    // Botões
    buttons: {
      create: "Criar",
      search: "Buscar",
      save: "Salvar",
      cancel: "Cancelar",
      continue: "Continuar",
      continueShopping: "Continuar comprando",
      createAccount: "Criar conta",
      addAddress: "Adicionar endereço",
      finishOrder: "Finalizar pedido",
      finish: "Finalizar",
      remove: "Remover",
      add: "Adicionar",
      download: "Download",
    },

    // Títulos e cabeçalhos
    titles: {
      enterDetails: "Informe seus dados",
      enterAddress: "Informe seu endereço",
      searchEmail: "Busque pelo seu e-mail cadastrado",
      address: "Endereço",
      categories: "Categorias",
      promotions: "Promoções que você ama!",
      orders: "Pedidos",
      shoppingBag: "Carrinho de compras",
    },

    // Mensagens de erro
    errors: {
      invalidEmail: "Por favor, insira um e-mail válido",
      emailRequired: "E-mail é obrigatório",
      emailNotFound: "E-mail não encontrado. Verifique o e-mail digitado ou crie uma conta",
      emailAlreadyExists: "Este e-mail já está cadastrado. Faça login ou use outro e-mail",
      nameRequired: "Nome é obrigatório",
      nameOnlyLetters: "Nome deve conter apenas letras, sem espaços",
      nameMinLength: "Nome deve ter pelo menos 3 letras",
      nameMaxLength: "Nome deve ter no máximo 32 letras",
      lastNameRequired: "Sobrenome é obrigatório",
      lastNameOnlyLetters: "Sobrenome deve conter apenas letras, sem espaços",
      lastNameMinLength: "Sobrenome deve ter pelo menos 3 letras",
      lastNameMaxLength: "Sobrenome deve ter no máximo 32 letras",
      phoneRequired: "Telefone é obrigatório",
      phoneOnlyDigits: "Telefone deve conter apenas números",
      phoneLength: "Telefone deve ter 11 dígitos incluindo o DDD, exemplo: 51978978978",
      zipcodeRequired: "CEP é obrigatório",
      zipcodeInvalid: "CEP inválido. Digite 8 dígitos",
      zipcodeNotFound: "CEP não encontrado. Verifique o CEP digitado",
      addressRequired: "Endereço é obrigatório",
      addressMinLength: "Endereço deve ter pelo menos 3 caracteres",
      addressMaxLength: "Endereço deve ter no máximo 255 caracteres",
      numberRequired: "Número é obrigatório",
      neighborhoodRequired: "Bairro é obrigatório",
      neighborhoodMaxLength: "Bairro deve ter no máximo 255 caracteres",
      cityRequired: "Cidade é obrigatória",
      cityMinLength: "Cidade deve ter pelo menos 3 caracteres",
      cityMaxLength: "Cidade deve ter no máximo 255 caracteres",
      stateRequired: "Estado é obrigatório",
      stateLength: "Estado deve ter 2 letras",
      requestFailed: "Erro ao processar solicitação. Tente novamente",
      loginFailed: "Erro ao fazer login. Verifique suas credenciais e tente novamente",
      createAccountFailed: "Erro ao criar conta. Tente novamente",
      createAddressFailed: "Erro ao cadastrar endereço. Tente novamente",
      createOrderFailed: "Erro ao processar pedido. Tente novamente",
      genericError: "Ocorreu um erro inesperado. Por favor, tente novamente",
      notFound: "Recurso não encontrado",
      serverError: "Erro interno do servidor. Nossa equipe foi notificada",
    },

    // Mensagens de sucesso
    success: {
      accountCreated: "Conta criada com sucesso! Você já pode fazer login",
      loginSuccess: "Login realizado com sucesso!",
      addressCreated: "Endereço cadastrado com sucesso!",
      orderCreated: "Pedido realizado com sucesso!",
      itemAdded: "Produto adicionado ao carrinho",
      itemRemoved: "Produto removido do carrinho",
    },

    // Mensagens informativas
    info: {
      emptyCart: "Seu carrinho está vazio. Adicione produtos para continuar",
      noOrders: "Você ainda não realizou nenhum pedido",
      exploreCupcakes: "Explore nossos cupcakes e faça sua primeira compra!",
      loading: "Carregando...",
      searchingAddress: "Buscando endereço...",
      noAddress: "Você ainda não cadastrou nenhum endereço",
    },

    // Páginas de erro
    errorPages: {
      notFound: {
        title: "Página não encontrada",
        message: "A página que você está procurando não existe ou foi movida",
        backHome: "Voltar para a página inicial",
      },
      serverError: {
        title: "Erro no servidor",
        message: "Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema",
        backHome: "Voltar para a página inicial",
        tryAgain: "Tentar novamente",
      },
    },

    // Outros
    other: {
      shoppingBag: "Carrinho",
      theme: {
        light: "Modo claro",
        dark: "Modo escuro",
        switchToLight: "Alternar para modo claro",
        switchToDark: "Alternar para modo escuro",
      },
      address: "Endereço",
      shop: "Loja",
      total: "Total",
      login: "Entrar",
      registerAddress: "Cadastrar endereço",
      seeAll: "Ver todos",
      language: {
        pt: "Português",
        en: "English",
        switchToPt: "Alternar para português",
        switchToEn: "Switch to English",
      },
    },

    // Footer
    footer: {
      description: "Delícias artesanais feitas com amor. Peça online e receba no conforto da sua casa!",
      corporate: "Institucional",
      aboutUs: "Sobre nós",
      privacyPolicy: "Política de privacidade",
      termsOfUse: "Termos de uso",
      customerService: "Atendimento",
      contactUs: "Fale conosco",
      faq: "Perguntas frequentes",
      trackOrder: "Rastrear pedido",
      socialMedia: "Redes sociais",
    },
  },

  en: {
    // Navigation
    nav: {
      account: "Account",
      login: "Login",
      cart: "Cart",
      orders: "Orders",
      categories: "Categories",
    },

    // Forms
    forms: {
      email: "Email",
      name: "Name",
      lastName: "Last Name",
      phone: "Phone",
      address: "Address",
      number: "Number",
      complement: "Complement",
      neighborhood: "Neighborhood",
      city: "City",
      state: "State",
      zipcode: "ZIP Code",
      saveAsMain: "Save as main address",
    },

    // Buttons
    buttons: {
      create: "Create",
      search: "Search",
      save: "Save",
      cancel: "Cancel",
      continue: "Continue",
      continueShopping: "Continue shopping",
      createAccount: "Create account",
      addAddress: "Add address",
      finishOrder: "Finish order",
      finish: "Finish",
      remove: "Remove",
      add: "Add",
      download: "Download",
    },

    // Titles and headers
    titles: {
      enterDetails: "Enter your details",
      enterAddress: "Enter your address",
      searchEmail: "Search for your registered email",
      address: "Address",
      categories: "Categories",
      promotions: "Promotions you love!",
      orders: "Orders",
      shoppingBag: "Shopping cart",
    },

    // Error messages
    errors: {
      invalidEmail: "Please enter a valid email",
      emailRequired: "Email is required",
      emailNotFound: "Email not found. Check the email entered or create an account",
      emailAlreadyExists: "This email is already registered. Log in or use another email",
      nameRequired: "Name is required",
      nameOnlyLetters: "Name must contain only letters, without spaces",
      nameMinLength: "Name must have at least 3 letters",
      nameMaxLength: "Name must have at most 32 letters",
      lastNameRequired: "Last name is required",
      lastNameOnlyLetters: "Last name must contain only letters, without spaces",
      lastNameMinLength: "Last name must have at least 3 letters",
      lastNameMaxLength: "Last name must have at most 32 letters",
      phoneRequired: "Phone is required",
      phoneOnlyDigits: "Phone must contain only digits",
      phoneLength: "Phone must have 11 digits including area code, e.g., 51978978978",
      zipcodeRequired: "ZIP code is required",
      zipcodeInvalid: "Invalid ZIP code. Enter 8 digits",
      zipcodeNotFound: "ZIP code not found. Check the ZIP code entered",
      addressRequired: "Address is required",
      addressMinLength: "Address must be at least 3 characters long",
      addressMaxLength: "Address must be at most 255 characters long",
      numberRequired: "Number is required",
      neighborhoodRequired: "Neighborhood is required",
      neighborhoodMaxLength: "Neighborhood must be at most 255 characters long",
      cityRequired: "City is required",
      cityMinLength: "City must be at least 3 characters long",
      cityMaxLength: "City must be at most 255 characters long",
      stateRequired: "State is required",
      stateLength: "State must be 2 letters long",
      requestFailed: "Error processing request. Please try again",
      loginFailed: "Login error. Check your credentials and try again",
      createAccountFailed: "Error creating account. Please try again",
      createAddressFailed: "Error registering address. Please try again",
      createOrderFailed: "Error processing order. Please try again",
      genericError: "An unexpected error occurred. Please try again",
      notFound: "Resource not found",
      serverError: "Internal server error. Our team has been notified",
    },

    // Success messages
    success: {
      accountCreated: "Account created successfully! You can now log in",
      loginSuccess: "Login successful!",
      addressCreated: "Address registered successfully!",
      orderCreated: "Order placed successfully!",
      itemAdded: "Product added to cart",
      itemRemoved: "Product removed from cart",
    },

    // Informative messages
    info: {
      emptyCart: "Your cart is empty. Add products to continue",
      noOrders: "You haven't placed any orders yet",
      exploreCupcakes: "Explore our cupcakes and make your first purchase!",
      loading: "Loading...",
      searchingAddress: "Searching address...",
      noAddress: "You haven't registered any address yet",
    },

    // Error pages
    errorPages: {
      notFound: {
        title: "Page not found",
        message: "The page you are looking for does not exist or has been moved",
        backHome: "Back to home page",
      },
      serverError: {
        title: "Server error",
        message: "An unexpected error occurred. Our team has been notified and is working to resolve the issue",
        backHome: "Back to home page",
        tryAgain: "Try again",
      },
    },

    // Other
    other: {
      shoppingBag: "Cart",
      theme: {
        light: "Light mode",
        dark: "Dark mode",
        switchToLight: "Switch to light mode",
        switchToDark: "Switch to dark mode",
      },
      address: "Address",
      shop: "Shop",
      total: "Total",
      login: "Login",
      registerAddress: "Register address",
      seeAll: "See all",
      language: {
        pt: "Português",
        en: "English",
        switchToPt: "Switch to Portuguese",
        switchToEn: "Switch to English",
      },
    },

    // Footer
    footer: {
      description: "Handcrafted treats made with love. Order online and receive it at the comfort of your home!",
      corporate: "Corporate",
      aboutUs: "About us",
      privacyPolicy: "Privacy policy",
      termsOfUse: "Terms of use",
      customerService: "Customer Service",
      contactUs: "Contact us",
      faq: "FAQ",
      trackOrder: "Track order",
      socialMedia: "Social Media",
    },
  },
} as const;

// Função helper para obter traduções (para server components)
export function getTranslations(language: "pt" | "en" = "pt") {
  return translations[language];
}
