export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cupcakes CS",
  description: "Loja virtual de cupcakes artesanais - Encontre os melhores sabores e faça seu pedido online",
  navItems: [
    {
      label: "Account",
      href: "/account",
      logged: true
    },
    {
      label: "Login",
      href: "/account",
      logged: false
    },
    {
      label: "Cart",
      href: "/shopping-bag",
      logged: true
    },
    {
      label: "Orders",
      href: "/order",
      logged: true
    },
    {
      label: "Categories",
      href: "/category",
      always: true
    },
  ],
  links: {
    github: "Cupcakes CS",
  },
};
