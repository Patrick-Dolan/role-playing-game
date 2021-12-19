import { Character, rollD6 } from "./../src/charactercreation.js";

describe("Character", () => {
  test("should correctly create a character object", () => {
    let character = new Character("John Smith")
    expect(character.name).toBe("John Smith");
  });
  describe("generateStats", () => {
    test("should generate intelligence stat", () => {
      let character = new Character("John Smith");
      character.generateStats()
      expect(character.int).toBeGreaterThanOrEqual(1);
      expect(character.int).toBeLessThan(7);
    });
    test("should generate strength stat", () => {
      let character = new Character("John Smith");
      character.generateStats()
      expect(character.str).toBeGreaterThanOrEqual(1);
      expect(character.str).toBeLessThan(7);
    });
    test("should generate agility stat", () => {
      let character = new Character("John Smith");
      character.generateStats()
      expect(character.agi).toBeGreaterThanOrEqual(1);
      expect(character.agi).toBeLessThan(7);
    });
  });
});
describe("rollD6", () => {
  test("should return a number between 1 and 6", () => {
    const randomNumber = rollD6();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThan(7);
  });
});