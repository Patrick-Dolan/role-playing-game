export class Character {
  constructor(name) {
    this.name = name;
    this.int = 0;
    this.str = 0;
    this.agi = 0;
  }
  generateStats() {
    this.int = rollD6();
    this.str = rollD6();
    this.agi = rollD6();
  }
}
export function rollD6() {
  return Math.floor((Math.random() * 6) + 1);
}