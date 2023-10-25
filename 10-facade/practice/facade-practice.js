class Game {
  locations = [];

  monstersLocationCount = 10;
  locationCount = 3;

  start () {
    // todo: add implementation
  }

  addLocations () {
    const addLocation = (count) => {
      if (count === this.locationCount) return;

      for (const monster of this.createMonsters()) {

      }

      addLocation(count + 1);
    };

    addLocation(1);
  }

  createMonsters () {
    return new Array(monstersCount).fill(new Monster());
  }
}

// class Hero {
//   constructor(name = '', attack = 0) {
//     this.attack = attack;
//   }
// }

class Location {
  monsters = [];
  constructor(name = '', level = 1, resists = []) {
    this.name = name;
    this.resists = resists;
    this.level = level;
  }

  addMonster (monster) {
    monster.addResists(this.resists);
    monster.addLevel(this.level);
    this.monsters.push(monster);
  }
}

class Monster {
  level = 1;
  baseHealth = 100;

  get health () {
    return this.level * this.baseHealth;
  }

  addLevel (level) {
    this.level = level;
  }

  addResists (resists = []) {
    this.resists = resists;
  }
}

// const hero = new Hero('barbarian');
const monstersCount = 10;

const locations = [];

const location1 = new Location('darkForest', 1 ['fire']);
const location2 = new Location('dryHills', 2,['fire', 'cold']);
const location3 = new Location('lavaCavern', 3,['fire', 'cold', 'lighting']);

locations.push(location1);
locations.push(location2);
locations.push(location3);

const monsters = new Array(monstersCount).fill(new Monster());

for (const location of locations) {
  for (const monster of monsters) {
    monster.resists = location.resists;
    monster.level = location.level;
  }
}
