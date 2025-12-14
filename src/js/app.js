// TODO: write your code here
import sum from './basic';
import Team from "./classes/Team";

console.log('worked');

console.log('sum', sum([1, 2]));


const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
const char2 = { name: 'Маг', type: 'Magician', health: 40, level: 1, attack: 50, defence: 5 };

const team = new Team([char1, char2]);

for (const character of team) {
  console.log(character.name);
}

const arr = [...team];
console.log(arr.length);


const team2 = new Team([
  { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 },
  { name: 'Мечник', type: 'Swordsman', health: 70, level: 2, attack: 50, defence: 20 }
]);

for (const character of team2) {
  console.log(character);
}
