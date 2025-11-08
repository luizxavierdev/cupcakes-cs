import { Cupcake } from '../cupcake.model';
import { ShoppingBag } from '../shopping-bag.model';

describe('ShoppingBag', () => {
  const mockCupcakes: Cupcake[] = [
    {
      id: 1,
      name: 'Cupcake 1',
      description: 'Description 1',
      image: 'image1.jpg',
      value: { value: 10.5, formatted: 'R$ 10,50' },
      ingredients: 'ingredient1, ingredient2',
      createdAt: new Date(),
      updatedAt: new Date(),
      categories: [],
    },
    {
      id: 2,
      name: 'Cupcake 2',
      description: 'Description 2',
      image: 'image2.jpg',
      value: { value: 15.0, formatted: 'R$ 15,00' },
      ingredients: 'ingredient3, ingredient4',
      createdAt: new Date(),
      updatedAt: new Date(),
      categories: [],
    },
  ];

  describe('constructor', () => {
    it('should create shopping bag with empty map', () => {
      // Arrange & Act
      const bag = new ShoppingBag({ cupcakes: new Map() });

      // Assert
      expect(bag.cupcakes).toBeInstanceOf(Map);
      expect(bag.cupcakes.size).toBe(0);
    });

    it('should create shopping bag with items', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['2', { id: 2, quantity: 1 }],
      ]);

      // Act
      const bag = new ShoppingBag({ cupcakes });

      // Assert
      expect(bag.cupcakes.size).toBe(2);
      expect(bag.cupcakes.get('1')).toEqual({ id: 1, quantity: 2 });
      expect(bag.cupcakes.get('2')).toEqual({ id: 2, quantity: 1 });
    });
  });

  describe('getTotalCount', () => {
    it('should return 0 for empty bag', () => {
      // Arrange
      const bag = new ShoppingBag({ cupcakes: new Map() });

      // Act
      const total = bag.getTotalCount();

      // Assert
      expect(total).toBe(0);
    });

    it('should return correct total count', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['2', { id: 2, quantity: 3 }],
        ['3', { id: 3, quantity: 1 }],
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const total = bag.getTotalCount();

      // Assert
      expect(total).toBe(6);
    });
  });

  describe('getCounts', () => {
    it('should return empty array for empty bag', () => {
      // Arrange
      const bag = new ShoppingBag({ cupcakes: new Map() });

      // Act
      const counts = bag.getCounts();

      // Assert
      expect(counts).toEqual([]);
    });

    it('should return array of counts', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['2', { id: 2, quantity: 3 }],
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const counts = bag.getCounts();

      // Assert
      expect(counts).toHaveLength(2);
      expect(counts).toContainEqual({ id: 1, quantity: 2 });
      expect(counts).toContainEqual({ id: 2, quantity: 3 });
    });
  });

  describe('mountList', () => {
    it('should return empty array for empty bag', () => {
      // Arrange
      const bag = new ShoppingBag({ cupcakes: new Map() });

      // Act
      const list = bag.mountList(mockCupcakes);

      // Assert
      expect(list).toEqual([]);
    });

    it('should mount list with correct items and counts', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['2', { id: 2, quantity: 1 }],
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const list = bag.mountList(mockCupcakes);

      // Assert
      expect(list).toHaveLength(2);
      expect(list[0]).toEqual({ ...mockCupcakes[0], count: 2 });
      expect(list[1]).toEqual({ ...mockCupcakes[1], count: 1 });
    });

    it('should filter out items not in cupcakes list', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['999', { id: 999, quantity: 1 }], // Not in mockCupcakes
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const list = bag.mountList(mockCupcakes);

      // Assert
      expect(list).toHaveLength(1);
      expect(list[0]).toEqual({ ...mockCupcakes[0], count: 2 });
    });
  });

  describe('getTotalValue', () => {
    it('should return 0 for empty bag', () => {
      // Arrange
      const bag = new ShoppingBag({ cupcakes: new Map() });

      // Act
      const total = bag.getTotalValue(mockCupcakes);

      // Assert
      expect(total).toBe(0);
    });

    it('should calculate total value correctly', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }], // 2 * 10.5 = 21
        ['2', { id: 2, quantity: 1 }], // 1 * 15.0 = 15
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const total = bag.getTotalValue(mockCupcakes);

      // Assert
      expect(total).toBe(36); // 21 + 15
    });

    it('should handle items not in cupcakes list', () => {
      // Arrange
      const cupcakes = new Map([
        ['1', { id: 1, quantity: 2 }],
        ['999', { id: 999, quantity: 1 }], // Not in mockCupcakes
      ]);
      const bag = new ShoppingBag({ cupcakes });

      // Act
      const total = bag.getTotalValue(mockCupcakes);

      // Assert
      expect(total).toBe(21); // Only cupcake 1: 2 * 10.5
    });
  });
});

