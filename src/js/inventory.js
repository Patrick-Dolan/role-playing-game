export class Inventory {
  constructor() {
    this.items = [];
    // this.armor = {};
    // this.weapon = {};
    // this.trinket = {};
  }
  //TODO Create constuctor object for equip slots
  //TODO add tooManyItems conditional to addItem function
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  tooManyItems() {
    return this.items.length >= 5;
  }
};