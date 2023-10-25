class Locked {
  status = "locked";
  constructor(key) {
    this.key = key;
  }
  tryCount = 0;
  next (combination) {
    if (combination === this.key) {
      this.tryCount = 0;
      return new Unlocked();
    }

    this.tryCount += 1;

    if (this.tryCount === 3) {
      return new Blocked(this.key);
    }

    return this;
  }
}

class Unlocked {
  status = "unlocked";
  constructor(key = '') {
    this.key = key;
  }
  next (combination) {
    if (combination) {
      return new Locked(combination);
    }

    return new Locked(this.key);
  }
}

class Blocked {
  status = "blocked";

  constructor(key = '') {
    this.key = key;
  }
  next (combination) {
    if (combination === this.key) {
      return new Unlocked(this.key);
    }

    return this;
  }
}

class DigitalLock {
  constructor(key = "") {
    this.state = new Locked(key);
  }

  toggle (combination) {
    this.state = this.state.next(combination);

    return this.state.status;
  }
}

const lock = new DigitalLock("123123");

console.error(lock.toggle("wrong-combination"));
console.error(lock.toggle("123123"));
console.error(lock.toggle("123123"));
console.error(lock.toggle("wrong-combination"));
console.error(lock.toggle("wrong-combination"));
console.error(lock.toggle("wrong-combination"));

console.error(lock.toggle("123123"));
