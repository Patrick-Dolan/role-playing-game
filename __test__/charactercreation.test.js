import { Character, rollD6 } from "./../src/charactercreation.js";

describe("Character", () => {
  let character;
  beforeEach(() => {
    character = new Character("John Smith");
  });
  test("should correctly create a character object", () => {
    expect(character.name).toBe("John Smith");
  });
  describe("generateStats", () => {
    test("should generate intelligence stat", () => {
      character.generateStats()
      expect(character.stats.int).toBeGreaterThanOrEqual(1);
      expect(character.stats.int).toBeLessThan(7);
    });
    test("should generate strength stat", () => {
      character.generateStats()
      expect(character.stats.str).toBeGreaterThanOrEqual(1);
      expect(character.stats.str).toBeLessThan(7);
    });
    test("should generate agility stat", () => {
      character.generateStats()
      expect(character.stats.agi).toBeGreaterThanOrEqual(1);
      expect(character.stats.agi).toBeLessThan(7);
    });
  });
  describe("chooseClass", () => {
    test("should take in a choice argument and add a class to the character", () => {
      let choice = "Wizard";
      character.chooseClass(choice);
      expect(character.class).toEqual("Wizard");
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