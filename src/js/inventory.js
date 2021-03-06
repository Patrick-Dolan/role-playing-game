export class Inventory {
  constructor() {
    this.items = [];
    this.armor = {};
    this.weapon = {};
    this.trinket = {};
  }
  addItem(item) {
    return (this.tooManyItems()) ? "Inventory Full" : this.items.push(item);
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  tooManyItems() {
    return this.items.length >= 5;
  }
  equipItem(item) {
    if (item.equippable === "armor") {
      this.armor.item = item;
    } else if (item.equippable === "weapon") {
      this.weapon.item = item;
    } else if (item.equippable === "trinket") {
      this.trinket.item = item;
    } else {
      return "Item not equippable";
    }
  }
};