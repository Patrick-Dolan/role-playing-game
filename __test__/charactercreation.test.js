import { Character, rollD6 } from "./../src/charactercreation.js";

describe("Character", () => {
  test("should correctly create a character object", () => {
    let character = new Character("John Smith")
    expect(character.name).toBe("John Smith");
  });
});
describe("rollD6", () => {
  test("should return a number between 1 and 6", () => {
    const randomNumber = rollD6();
    expect(randomNumber).toBeGreaterThanOrEqualTo(1);
    expect(randomNumber).toBeLessThan(7);
  });
});