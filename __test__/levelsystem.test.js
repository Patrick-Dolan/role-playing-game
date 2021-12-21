import { Character } from "../src/js/charactercreation";
import { checkLevel } from "../src/js/levelsystem";

let character;
let classChoice;
beforeEach(() => {
  character = new Character("John Smith");
  classChoice = "Fighter";
  character.generateStats();
  character.chooseClass(classChoice);
});

describe("returnLevel", () => {
  test("should return the level of the character", () => {
    expect(checkLevel(character)).toEqual(1);
  });
});