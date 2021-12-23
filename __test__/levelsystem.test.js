import { Character } from "../src/js/charactercreation";
import { checkLevel, checkExp, levelUp, addExp } from "../src/js/levelsystem";

let fighterCharacter;
let fighterChoice;
let wizardCharacter;
let wizardChoice;
let rogueCharacter;
let rogueChoice;
beforeEach(() => {
  //Fighter
  fighterCharacter = new Character("John Smith");
  fighterChoice = "Fighter";
  fighterCharacter.generateStats();
  fighterCharacter.chooseClass(fighterChoice);
  //Wizard
  wizardCharacter = new Character("John Smith");
  wizardChoice = "Wizard";
  wizardCharacter.generateStats();
  wizardCharacter.chooseClass(wizardChoice);
  //Rogue
  rogueCharacter = new Character("John Smith");
  rogueChoice = "Rogue";
  rogueCharacter.generateStats();
  rogueCharacter.chooseClass(rogueChoice);
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
  // Fighter specific tests
  test("should increase the strength of the character by 2 when character is a level 2 fighter", () => {
    let firstStr = fighterCharacter.stats.str;
    levelUp(fighterCharacter);
    expect(fighterCharacter.level).toEqual(2);
    expect(fighterCharacter.stats.str).toEqual(firstStr + 2);
  });
  test("should increase the strength of the character by 2 when character is a level 3 fighter", () => {
    let firstStr = 0;
    for (let i = 0; i <= 1; i++){
      firstStr = fighterCharacter.stats.str;
      levelUp(fighterCharacter);
    }  
    expect(fighterCharacter.level).toEqual(3);
    expect(fighterCharacter.stats.str).toEqual(firstStr + 2);
  });
  test("should increase the strength of the character by 2 when character is a level 4 fighter", () => {
    let firstStr = 0;
    for (let i = 0; i <= 2; i++){
      firstStr = fighterCharacter.stats.str;
      levelUp(fighterCharacter);
      }  
    expect(fighterCharacter.level).toEqual(4);
    expect(fighterCharacter.stats.str).toEqual(firstStr + 2);
  });
  test("should increase the strength of the character by 2 when character is a level 5 fighter", () => {
    let firstStr = 0;
    for (let i = 0; i <= 3; i++){
      firstStr = fighterCharacter.stats.str;
      levelUp(fighterCharacter);
      }  
    expect(fighterCharacter.level).toEqual(5);
    expect(fighterCharacter.stats.str).toEqual(firstStr + 2);
  });
  // Wizard specific tests
  test("should increase the intellgience of the character by 2 when character is a level 2 wizard", () => {
    let firstInt = wizardCharacter.stats.int;
    levelUp(wizardCharacter);
    expect(wizardCharacter.level).toEqual(2);
    expect(wizardCharacter.stats.int).toEqual(firstInt + 2);
  });
  test("should increase the intellgience of the character by 2 when character is a level 3 wizard", () => {
    let firstInt = 0;
    for (let i = 0; i <= 1; i++){
      firstInt = wizardCharacter.stats.int;
      levelUp(wizardCharacter);
    }  
    expect(wizardCharacter.level).toEqual(3);
    expect(wizardCharacter.stats.int).toEqual(firstInt + 2);
  });
  test("should increase the intellgience of the character by 2 when character is a level 4 wizard", () => {
    let firstInt = 0;
    for (let i = 0; i <= 2; i++){
      firstInt = wizardCharacter.stats.int;
      levelUp(wizardCharacter);
      }  
    expect(wizardCharacter.level).toEqual(4);
    expect(wizardCharacter.stats.int).toEqual(firstInt + 2);
  });
  test("should increase the intellgience of the character by 2 when character is a level 5 wizard", () => {
    let firstInt = 0;
    for (let i = 0; i <= 3; i++){
      firstInt = wizardCharacter.stats.int;
      levelUp(wizardCharacter);
      }  
    expect(wizardCharacter.level).toEqual(5);
    expect(wizardCharacter.stats.int).toEqual(firstInt + 2);
  });
  // Rogue specific tests
  test("should increase the agility of the character by 2 when character is a level 2 rogue", () => {
    let firstAgi = rogueCharacter.stats.agi;
    levelUp(rogueCharacter);
    expect(rogueCharacter.level).toEqual(2);
    expect(rogueCharacter.stats.agi).toEqual(firstAgi + 2);
  });
  test("should increase the agility of the character by 2 when character is a level 3 rogue", () => {
    let firstAgi = 0;
    for (let i = 0; i <= 1; i++){
      firstAgi = rogueCharacter.stats.agi;
      levelUp(rogueCharacter);
    }  
    expect(rogueCharacter.level).toEqual(3);
    expect(rogueCharacter.stats.agi).toEqual(firstAgi + 2);
  });
  test("should increase the agility of the character by 2 when character is a level 4 rogue", () => {
    let firstAgi = 0;
    for (let i = 0; i <= 2; i++){
      firstAgi = rogueCharacter.stats.agi;
      levelUp(rogueCharacter);
      }  
    expect(rogueCharacter.level).toEqual(4);
    expect(rogueCharacter.stats.agi).toEqual(firstAgi + 2);
  });
  test("should increase the agility of the character by 2 when character is a level 5 rogue", () => {
    let firstAgi = 0;
    for (let i = 0; i <= 3; i++){
      firstAgi = rogueCharacter.stats.agi;
      levelUp(rogueCharacter);
      }  
    expect(rogueCharacter.level).toEqual(5);
    expect(rogueCharacter.stats.agi).toEqual(firstAgi + 2);
  });
});