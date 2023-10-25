class Child {
  constructor(value) {
    this.value = value;
  }

  getSum () {
    // todo: add your logic here
    return this.value;
  }
}

class Parent {
  constructor(values = []) {
    this.values = values;
  }

  getSum () {
    // todo: add your logic here
    let sum = 0;

    for (const item of this.values) {
      sum += item.getSum();
    }

    return sum;
  }
}

const list = new Parent([
  new Child(1),
  new Child(1),
  new Parent([
    new Child(1),
    new Child(1),
    new Child(1),
  ])
]);

console.error(list.getSum()); // 5
