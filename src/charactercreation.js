export class Character {
  constructor(name) {
    this.name = name;
    this.stats = {
      int: 0,
      str: 0,
      agi: 0
    };
  }
  generateStats() {
    this.stats.int = rollD6();
    this.stats.str = rollD6();
    this.stats.agi = rollD6();
  }
}
export function rollD6() {
  return Math.floor((Math.random() * 6) + 1);
}