import { ShoppingBag } from '@/models/shopping-bag.model';
import { StorageKeys } from '@/types/storage-keys.enum';
import {
  addCupcake,
  clearShoppingBag,
  getShoppingBag,
  removeCupcake,
  storeShoppingBag,
} from '../shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('getShoppingBag', () => {
    it('should return empty shopping bag when localStorage is empty', () => {
      // Arrange
      localStorage.removeItem(StorageKeys.shoppingBag);

      // Act
      const result = getShoppingBag();

      // Assert
      expect(result).toBeInstanceOf(ShoppingBag);
      expect(result.cupcakes.size).toBe(0);
    });

    it('should return shopping bag with items from localStorage', () => {
      // Arrange
      const storedData = { '1': { id: 1, quantity: 2 }, '2': { id: 2, quantity: 1 } };
      localStorage.setItem(StorageKeys.shoppingBag, JSON.stringify(storedData));

      // Act
      const result = getShoppingBag();

      // Assert
      expect(result).toBeInstanceOf(ShoppingBag);
      expect(result.cupcakes.size).toBe(2);
      expect(result.cupcakes.get('1')).toEqual({ id: 1, quantity: 2 });
      expect(result.cupcakes.get('2')).toEqual({ id: 2, quantity: 1 });
    });

    it('should handle invalid JSON in localStorage', () => {
      // Arrange
      localStorage.setItem(StorageKeys.shoppingBag, 'invalid json');

      // Act & Assert
      expect(() => getShoppingBag()).toThrow();
    });
  });

  describe('storeShoppingBag', () => {
    it('should store shopping bag in localStorage', () => {
      // Arrange
      const shoppingBag = new ShoppingBag({
        cupcakes: new Map([
          ['1', { id: 1, quantity: 2 }],
          ['2', { id: 2, quantity: 1 }],
        ]),
      });

      // Act
      storeShoppingBag(shoppingBag);

      // Assert
      const stored = localStorage.getItem(StorageKeys.shoppingBag);
      expect(stored).toBe(JSON.stringify({ '1': { id: 1, quantity: 2 }, '2': { id: 2, quantity: 1 } }));
    });

    it('should store empty shopping bag', () => {
      // Arrange
      const shoppingBag = new ShoppingBag({ cupcakes: new Map() });

      // Act
      storeShoppingBag(shoppingBag);

      // Assert
      const stored = localStorage.getItem(StorageKeys.shoppingBag);
      expect(stored).toBe(JSON.stringify({}));
    });
  });

  describe('addCupcake', () => {
    it('should add new cupcake to empty bag', () => {
      // Arrange
      localStorage.removeItem(StorageKeys.shoppingBag);

      // Act
      const result = addCupcake(1);

      // Assert
      expect(result.cupcakes.get('1')).toEqual({ id: 1, quantity: 1 });
      const stored = localStorage.getItem(StorageKeys.shoppingBag);
      expect(stored).toBeTruthy();
    });

    it('should increment quantity when cupcake already exists', () => {
      // Arrange
      const storedData = { '1': { id: 1, quantity: 2 } };
      localStorage.setItem(StorageKeys.shoppingBag, JSON.stringify(storedData));

      // Act
      const result = addCupcake(1);

      // Assert
      expect(result.cupcakes.get('1')).toEqual({ id: 1, quantity: 3 });
    });

    it('should add multiple different cupcakes', () => {
      // Arrange
      localStorage.removeItem(StorageKeys.shoppingBag);

      // Act
      addCupcake(1);
      addCupcake(2);
      const result = addCupcake(1);

      // Assert
      expect(result.cupcakes.get('1')).toEqual({ id: 1, quantity: 2 });
      expect(result.cupcakes.get('2')).toEqual({ id: 2, quantity: 1 });
    });
  });

  describe('removeCupcake', () => {
    it('should decrement quantity when cupcake exists', () => {
      // Arrange
      const storedData = { '1': { id: 1, quantity: 3 } };
      localStorage.setItem(StorageKeys.shoppingBag, JSON.stringify(storedData));

      // Act
      const result = removeCupcake(1);

      // Assert
      expect(result.cupcakes.get('1')).toEqual({ id: 1, quantity: 2 });
    });

    it('should remove cupcake when quantity reaches zero', () => {
      // Arrange
      const storedData = { '1': { id: 1, quantity: 1 } };
      localStorage.setItem(StorageKeys.shoppingBag, JSON.stringify(storedData));

      // Act
      const result = removeCupcake(1);

      // Assert
      expect(result.cupcakes.has('1')).toBe(false);
    });

    it('should handle removing non-existent cupcake', () => {
      // Arrange
      localStorage.removeItem(StorageKeys.shoppingBag);

      // Act
      const result = removeCupcake(999);

      // Assert
      expect(result.cupcakes.has('999')).toBe(false);
    });
  });

  describe('clearShoppingBag', () => {
    it('should remove shopping bag from localStorage', () => {
      // Arrange
      const storedData = { '1': { id: 1, quantity: 2 } };
      localStorage.setItem(StorageKeys.shoppingBag, JSON.stringify(storedData));

      // Act
      clearShoppingBag();

      // Assert
      expect(localStorage.getItem(StorageKeys.shoppingBag)).toBeNull();
    });
  });
});

