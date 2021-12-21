import { Character } from "../src/js/charactercreation";

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
    expect(character.checkLevel()).toEqual(1);
  });
});