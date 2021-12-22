import { Character } from "../src/js/charactercreation";
import { checkLevel, checkExp, levelUp } from "../src/js/levelsystem";

let character;
let classChoice;
beforeEach(() => {
  character = new Character("John Smith");
  classChoice = "Fighter";
  character.generateStats();
  character.chooseClass(classChoice);
});

describe("checkLevel", () => {
  test("should return the level of the character", () => {
    expect(checkLevel(character)).toEqual(1);
  });
});
describe("checkExp", () => {
  test("should return the exp of the character", () => {
    expect(checkExp(character)).toEqual(0);
  });
});
describe("levelUp", () => {
  test("should increase the level of the character", () => {
    levelUp(character);
    expect(character.level).toEqual(2);
  });
});