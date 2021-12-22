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
describe("levelUp", () => {
  test("should increase the level of the character", () => {
    character.exp = 10;
    levelUp(character);
    expect(character.level).toEqual(2);
  });
  test("should increase character level to 2 when exp reaches 15", () => {
    character.fights = 2;
    levelUp(character);
    expect(character.level).toEqual(2);
    expect(character.exp).toEqual(15);
  });
});