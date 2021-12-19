import { Character } from "./../src/charactercreation.js";

describe("Character", () => {
  test("should correctly create a character object", () => {
    let character = new Character("John Smith")
    expect(character.name).toBe("John Smith");
  });
});