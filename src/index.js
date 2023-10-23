import Character from './js/character';
import Daemon from './js/daemon';

const character = new Character('Котик');
const bowman = new Daemon();

console.log(character, bowman, bowman instanceof Character);
