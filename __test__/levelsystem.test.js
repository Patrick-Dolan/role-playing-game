import { Character } from "../src/js/charactercreation";
import { checkLevel, checkExp, levelUp, addExp } from "../src/js/levelsystem";

let character;
let classChoice;
beforeEach(() => {
  character = new Character("John Smith");
  classChoice = "Fighter";
  character.generateStats();
  character.chooseClass(classChoice);
});
// Check level function
describe("checkLevel", () => {
  test("should return the level of the character", () => {
    expect(checkLevel(character)).toEqual(1);
  });
});
// Check Exp function
describe("checkExp", () => {
  test("should return the exp of the character", () => {
    expect(checkExp(character)).toEqual(1);
  });
});
// AddExp function
describe("addExp", () => {
  test("should add exp to the character based on 1 fights won", () => {
    character.fights = 1;
    addExp(character);
    expect(character.exp).toEqual(5);
  });
  test("should add exp to the character based on 5 fights won", () => {
    character.fights = 5;
    addExp(character);
    expect(character.exp).toEqual(25);
  });
});
// LevelUp function
describe("levelUp", () => {
  test("should increase the strength of the character by 2", () => {
    let firstStr = character.stats.str;
    levelUp(character);
    expect(character.level).toEqual(2);
    expect(character.stats.str).toEqual(firstStr + 2);
  });
});