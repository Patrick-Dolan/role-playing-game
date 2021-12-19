export class Character {
  constructor(name) {
    this.name = name;
    this.stats = {
      int: 0,
      str: 0,
      agi: 0,
      vit: 6
    };
    this.class = '';
  }
  generateStats() {
    this.stats.int = rollD6();
    this.stats.str = rollD6();
    this.stats.agi = rollD6();
  }
  chooseClass(choice) {
    this.class = choice;
    switch (choice) {
      case 'Wizard':
        this.stats.int += 2;
        break;
      case 'Fighter':
        this.stats.str += 2;
        break;
      case 'Rogue':
        this.stats.agi += 2;
        break;
    }
  }
}
export function rollD6() {
  return Math.floor((Math.random() * 6) + 1);
}