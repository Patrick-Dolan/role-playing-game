import { Character } from "../src/js/charactercreation";
import { checkLevel, checkExp, levelUp, addExp } from "../src/js/levelsystem";

let fighterCharacter;
let fighterChoice;
beforeEach(() => {
  fighterCharacter = new Character("John Smith");
  fighterChoice = "Fighter";
  fighterCharacter.generateStats();
  fighterCharacter.chooseClass(fighterChoice);
});
// Check level function
describe("checkLevel", () => {
  test("should return the level of the character", () => {
    expect(checkLevel(fighterCharacter)).toEqual(1);
  });
});
// Check Exp function
describe("checkExp", () => {
  test("should return the exp of the character", () => {
    expect(checkExp(fighterCharacter)).toEqual(1);
  });
});
// AddExp function
describe("addExp", () => {
  test("should add exp to the character based on 1 fights won", () => {
    fighterCharacter.fights = 1;
    addExp(fighterCharacter);
    expect(fighterCharacter.exp).toEqual(5);
  });
  test("should add exp to the character based on 5 fights won", () => {
    fighterCharacter.fights = 5;
    addExp(fighterCharacter);
    expect(fighterCharacter.exp).toEqual(25);
  });
});
// LevelUp function
describe("levelUp", () => {
  test("should increase the strength of the character by 2", () => {
    let firstStr = fighterCharacter.stats.str;
    levelUp(fighterCharacter);
    expect(fighterCharacter.level).toEqual(2);
    expect(fighterCharacter.stats.str).toEqual(firstStr + 2);
  });
});