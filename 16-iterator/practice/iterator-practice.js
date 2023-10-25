class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    // your logic here
    for (let item = this.start; item <= this.end; item += 1) {
      callback(item);
    }
  }

  getRange () {
    const range = [];

    this.forEach(item => {
      range.push(item);
    });

    return range;
  }
}

// tests
const range = new Range(5, 12);

// class Collection {
//   position = 0;
//   items = [];
//
//   next () {
//     const item = this.items[this.position];
//     this.position += 1;
//     return item;
//   }
//
//   hasNext () {
//     return this.position < this.items.length;
//   }
// }
