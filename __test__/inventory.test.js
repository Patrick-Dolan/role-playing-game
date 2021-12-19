import { Inventory } from "./../src/js/inventory.js";

describe("Inventory", () => {

  let inventory;
  beforeEach(() => {
    inventory = new Inventory();
  });

  // Test to initialize empty inventory.itemss array
  test("should initialize an inventory object", () => {
    expect(inventory.items).toEqual([]);
  });
  
  // Test to add item to inventory
  describe("addItem", () => {
    test("should add item to inventory.items", () => {
      const item = "sword";
      inventory.addItem(item);
      expect(inventory.items).toContain(item);
    });
  });

  // Test to remove item from inventory
  describe("removeItem", () => {
    test("should remove one item from inventory.items", () => {
      const armor = 'armor';
      inventory.addItem(armor);
      expect(inventory.items).toEqual([armor]);
      inventory.removeItem(armor);
      expect(inventory.items).toEqual([]);
    });

    test("should remove a specific item from inventory.items", () => {
      const potion = "potion";
      const spellbook = "spellbook";
      inventory.addItem(potion);
      inventory.addItem(spellbook);
      expect(inventory.items).toEqual([potion, spellbook]);
      inventory.removeItem(spellbook);
      expect(inventory.items).toEqual([potion]);
    });
  });

});