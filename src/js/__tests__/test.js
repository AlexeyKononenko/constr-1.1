import Bowman from '../boweman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

it('Создается персонаж с классом Bowman и заданным именем', () => {
  const bowman = new Bowman('Bowman');

  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});

it('Создается персонаж с классом Daemon и заданным именем', () => {
  const daemon = new Daemon('Daemon');

  expect(daemon).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});

it('Создается персонаж с классом Magician и заданным именем', () => {
  const magician = new Magician('Magician');

  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});

it('Создается персонаж с классом Swordsman и заданным именем', () => {
  const swordsman = new Swordsman('Swordsman');

  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});

it('Создается персонаж с классом Undead и заданным именем', () => {
  const undead = new Undead('Undead');

  expect(undead).toEqual({
    name: 'Undead',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});

it('Создается персонаж с классом Zombie и заданным именем', () => {
  const zombie = new Zombie('Zombie');

  expect(zombie).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});

it('Создается персонаж с классом Character и заданным именем', () => {
  const character = new Character('Luntic');

  expect(character).toEqual({
    name: 'Luntic',
    level: 1,
    health: 100,
  });
});

it('Создается персонаж с классом Character c именем по умолчанию', () => {
  const character = new Character();

  expect(character).toEqual({
    name: 'Just a pawn',
    level: 1,
    health: 100,
  });
});
