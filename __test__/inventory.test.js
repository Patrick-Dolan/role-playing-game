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
  
  // Test to add items to inventory
  describe("addItems", () => {
    test("should add items to inventory.items", () => {
      const item = "sword";
      inventory.addItems(item);
      expect(inventory.items).toContain(item);
    });
  });

  // Test to remove items from inventory
  describe("removeItems", () => {
    test("should remove items from inventory.items", () => {
      const armor = 'armor';
      inventory.addItems(armor);
      expect(inventory.items).toEqual([armor]);
      inventory.removeItems(armor);
      expect(inventory.items).toEqual([]);
    });
  });

});