class Club {
  speed = 0.5;
  damage = 20;
  attack (monster) {
    return (this.damage - monster.armor) * this.speed;
  }
}

class Sword {
  speed = 0.8;
  damage = 10;
  attack (monster) {
    return (this.damage - monster.armor) * this.speed;
  }
}

class MagicWand {
  speed = 1;
  damage = 12;
  attack (monster) {
    return (this.damage - monster.armor) * this.speed;
  }
}

class Character {
  constructor(name, weapon) {
    this.name = name;
    // todo: implement
    this.weapon = weapon;
  }

  // todo: implement
  hit (monster) {
    return this.weapon.attack(monster);
  }
}

class Monster {
  constructor(armor = 0) {
    this.armor = armor;
  }
}

const club = new Club();
const hero = new Character('Barbarian',club);
const monster1 = new Monster(3);
const monster2 = new Monster(8);

console.error(hero.hit(monster1));
console.error(hero.hit(monster2));
