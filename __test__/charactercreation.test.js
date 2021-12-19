import { Character, rollD6 } from "./../src/charactercreation.js";

describe("Character", () => {
  let character;
  beforeEach(() => {
    character = new Character("John Smith");
  });
  test("should correctly create a character object", () => {
    expect(character.name).toBe("John Smith");
  });

  // Tests to generate stats
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

  // Tests to choose character class
  describe("chooseClass", () => {
    test("should take in a choice argument and add a class to the character", () => {
      let choice = "Wizard";
      character.chooseClass(choice);
      expect(character.class).toEqual("Wizard");
    });
    test("should take in a choice argument and add a class to the character", () => {
      let choice = "Fighter";
      character.chooseClass(choice);
      expect(character.class).toEqual("Fighter");
    });
    test("should take in a choice argument and add a class to the character", () => {
      let choice = "Rogue";
      character.chooseClass(choice);
      expect(character.class).toEqual("Rogue");
    });

    // Tests to update character.stats based on character class chosen
    test("should take in Wizard as class and add +2 to this.stats.int", () => {
      let choice = "Wizard";
      character.generateStats();
      let previousStat = character.stats.int;
      character.chooseClass(choice);
      expect(character.stats.int).toEqual(previousStat + 2);
    });
    test("should take in Fighter as class and add +2 to this.stats.str", () => {
      let choice = "Fighter";
      character.generateStats();
      let previousStat = character.stats.str;
      character.chooseClass(choice);
      expect(character.stats.str).toEqual(previousStat + 2);
    }); 
    test("should take in Rogue as class and add +2 to this.stats.str", () => {
      let choice = "Rogue";
      character.generateStats();
      let previousStat = character.stats.agi;
      character.chooseClass(choice);
      expect(character.stats.agi).toEqual(previousStat + 2);
    });

    // Tests to update character.stats.int based on character class chosen
    test("should take in Wizard as class and subtract 1 to this.stats.vit", () => {
      let choice = "Wizard";
      character.generateStats();
      let previousStat = character.stats.vit;
      character.chooseClass(choice);
      expect(character.stats.vit).toEqual(previousStat - 1);
    });
    test("should take in Fighter as class and add 2 to this.stats.vit", () => {
      let choice = "Fighter";
      character.generateStats();
      let previousStat = character.stats.vit;
      character.chooseClass(choice);
      expect(character.stats.vit).toEqual(previousStat + 2);
    });
    test("should take in Rogue as class and add 1 to this.stats.vit", () => {
      let choice = "Rogue";
      character.generateStats();
      let previousStat = character.stats.vit;
      character.chooseClass(choice);
      expect(character.stats.vit).toEqual(previousStat + 1);
    });
  });
  
  describe("setHealth", () => {
    test("should set Wizard health to this.stats.vit score", () => {
      character.generateStats();
      character.chooseClass("Wizard");      
      character.setHealth();
      expect(character.health).toEqual(character.stats.vit);
    });
  });
});

// Tests for dice roll function
describe("rollD6", () => {
  test("should return a number between 1 and 6", () => {
    const randomNumber = rollD6();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThan(7);
  });
});