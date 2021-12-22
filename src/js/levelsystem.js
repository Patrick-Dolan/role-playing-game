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
  switch(character.level){
    case 2:
      character.stats.str += 1;
      break;
    case 3:
      character.stats.str += 1;
      break;
    case 4:
      character.stats.str += 1;
      break;
    case 5:
      character.stats.str += 1;
      break;
  }
}