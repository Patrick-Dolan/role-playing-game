import { Inventory } from "./../src/js/inventory.js";

describe("Inventory", () => {

  let inventory;
  beforeEach(() => {
    inventory = new Inventory();
  });

  test("should initialize an inventory object", () => {
    expect(inventory.items).toEqual([]);
  });
  
  // Test to add items to inventory
  describe("addItems", () => {
    test("should add items to inventory.items", () => {
      const item = "sword";
      expect(inventory.items).toContain(item);
    });

  });

});