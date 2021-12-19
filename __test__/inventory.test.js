import { Inventory } from "./../src/js/inventory.js";

describe("Inventory", () => {

  test("should initialize an inventory object", () => {
    const inventory = new Inventory();
    expect(inventory.items).toEqual([]);
  });

});