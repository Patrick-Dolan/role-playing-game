export function checkLevel(character) {
  return character.level;
}
export function checkExp(character) {
  return character.exp;
}
export function addExp(character) {
  return character.exp = character.fights += 1;
}
export function levelUp(character) {
  character.level += 1;
}