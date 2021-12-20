import { Inventory } from "./../src/js/inventory.js";

describe("Inventory", () => {

  let inventory;
  beforeEach(() => {
    inventory = new Inventory();
  });

  // Test to initialize empty inventory.items array
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

  ///Test to check for too many items in inventory
  describe("tooManyItems", () => {
    test("should return true if inventory.items has 5 items in it", () => {
      const item1 = "Item1";
      const item2 = "Item2";
      const item3 = "Item3";
      const item4 = "Item4";
      const item5 = "Item5";
      inventory.addItem(item1);
      inventory.addItem(item2);
      inventory.addItem(item3);
      inventory.addItem(item4);
      inventory.addItem(item5);
      expect(inventory.tooManyItems()).toEqual(true);
    });
  });

});