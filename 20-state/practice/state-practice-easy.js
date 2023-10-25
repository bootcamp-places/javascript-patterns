class Locked {
  status = "locked";
  constructor(key) {
    this.key = key;
  }
  next (combination) {
    if (combination === this.key) {
      return new Unlocked();
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

class DigitalLock {
  constructor(key = "") {
    this.state = new Locked(key);
  }

  toggle (combination = '') {
    this.state = this.state.next(combination);

    return this.state.status;
  }
}

// todo: make refactoring, use State pattern
class WithoutState {
  status = "locked";
  constructor(key = '') {
    this.key = key;
  }

  toggle (combination = '') {
    if (this.status === "locked") {
      if (combination === this.key) {
        this.status = "unlocked";
      }
    }

    if (this.status === "unlocked") {
      if (combination !== this.key) {
        this.key = combination;
      }

      this.status = "locked";
    }
  }
}

const lock = new DigitalLock("123123");

console.error(lock.toggle("wrong-combination"));
console.error(lock.toggle("123123"));
console.error(lock.toggle());
console.error(lock.toggle("123123"));
