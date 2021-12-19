export class Character {
  constructor(name) {
    this.name = name;
  }
}
export function rollD6() {
  return Math.floor((Math.random() * 6) + 1);
}