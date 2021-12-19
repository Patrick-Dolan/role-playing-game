export class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.stats = {
      int: 0,
      str: 0,
      agi: 0,
      vit: 0
    };
    this.class = '';
    this.health = 0;
  }
  generateStats() {
    this.stats.int = rollD6();
    this.stats.str = rollD6();
    this.stats.agi = rollD6();
    this.stats.vit = 6;
  }
  chooseClass(choice) {
    this.class = choice;
    switch (choice) {
      case 'Wizard':
        this.stats.int += 2;
        this.stats.vit -= 1;
        break;
      case 'Fighter':
        this.stats.str += 2;
        this.stats.vit += 2;
        break;
      case 'Rogue':
        this.stats.agi += 2;
        this.stats.vit += 1;
        break;
    }
  }
  setHealth() {
    this.health = this.stats.vit;
  };
}
export function rollD6() {
  return Math.floor((Math.random() * 6) + 1);
}