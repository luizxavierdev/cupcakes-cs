// Traduções para dados que vêm do backend (categorias e cupcakes)
export const categoryTranslations: Record<string, { name: string; description: string }> = {
  "Classics": {
    name: "Clássicos",
    description: "Cupcakes atemporais e clássicos, perfeitos para amantes de sabores tradicionais.",
  },
  "Fruit Flavors": {
    name: "Sabores de Frutas",
    description: "Cupcakes frescos e frutados, repletos do sabor de frutas naturais.",
  },
  "Chocolate": {
    name: "Chocolate",
    description: "Cupcakes indulgentes para amantes de chocolate, com combinações ricas e intensas.",
  },
  "Red Velvet": {
    name: "Red Velvet",
    description: "Os famosos cupcakes Red Velvet, com textura aveludada e sabor único.",
  },
  "Specials": {
    name: "Especiais",
    description: "Cupcakes gourmet exclusivos com ingredientes premium e decorações sofisticadas.",
  },
  "Limited Edition": {
    name: "Edição Limitada",
    description: "Cupcakes sazonais e de edição especial que mudam regularmente — não perca!",
  },
};

// Traduções para nomes de cupcakes (mapeamento básico - pode ser expandido)
export const cupcakeNameTranslations: Record<string, string> = {
  "Belgian Chocolate Cupcake": "Chocolate Belga",
  "Fresh Strawberry Cupcake": "Morango Fresco",
  "Red Velvet Cupcake": "Red Velvet",
  "Sicilian Lemon Cupcake": "Limão Siciliano",
  "Vanilla Raspberry Cupcake": "Baunilha com Framboesa",
  "Salted Caramel Cupcake": "Caramelo Salgado",
  "Espresso Coffee Cupcake": "Café Expresso",
  "Caramelized Peanut Cupcake": "Amendoim Caramelizado",
  "Apple Cinnamon Cupcake": "Maçã com Canela",
  "Coconut Pineapple Cupcake": "Coco com Abacaxi",
  "Pistachio Cupcake": "Pistache",
  "Passion Fruit Cupcake": "Maracujá",
  "Mint Chocolate Cupcake": "Chocolate com Menta",
  "Hazelnut Cupcake": "Avelã",
  "Mixed Berries Cupcake": "Frutas Vermelhas",
  "Blackberry Cupcake": "Amora",
  "Peach Ginger Cupcake": "Pêssego com Gengibre",
  "Banana Chocolate Cupcake": "Banana com Chocolate",
  "Lavender Cupcake": "Lavanda",
  "Pumpkin Walnut Cupcake": "Abóbora com Nozes",
  "Golden Truffle Cupcake": "Trufa Dourada",
};

// Função helper para traduzir categoria
export function translateCategory(categoryName: string): { name: string; description: string } {
  return categoryTranslations[categoryName] || { name: categoryName, description: "" };
}

// Função helper para traduzir nome de cupcake
export function translateCupcakeName(cupcakeName: string): string {
  return cupcakeNameTranslations[cupcakeName] || cupcakeName;
}

