export function checkLevel(character) {
  return character.level;
}
export function checkExp(character) {
  return character.exp;
}
export function addExp(character) {
  return character.exp = character.fights * 5;
}
export function levelUp(character) {
  character.level += 1;
  switch(character.class) {
    case "Fighter": 
      switch(character.level){
        case 2:
          character.stats.str += 2;
          break;
        case 3:
          character.stats.str += 2;
          break;
        case 4:
          character.stats.str += 2;
          break;
        case 5:
          character.stats.str += 2;
          break;
      }
    case "Wizard":
      switch(character.level){
        case 2:
          character.stats.int += 2;
          break;
        case 3:
          character.stats.int += 2;
          break;
        case 4:
          character.stats.int += 2;
          break;
        case 5:
          character.stats.int += 2;
          break;
      }
    case "Rogue":
      switch(character.level){
        case 2:
          character.stats.agi += 2;
          break;
        case 3:
          character.stats.agi += 2;
          break;
        case 4:
          character.stats.agi += 2;
          break;
        case 5:
          character.stats.agi += 2;
          break;
      }
  }
}
export function manageLevels(character) {
  addExp(character);
  switch(character.exp){
    case 5:
      levelUp(character);
      break;
    case 15:
      levelUp(character);
      break;
    case 30:
      levelUp(character);
      break;
    case 45:
      levelUp(character);
      break;
  }
}