```js
const range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for (const value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...range]); // 1,2,3,4,5
```

```js
function loadData (arr = []) {
  async function* generator () {
    for (const item of arr) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${item}`);
      const data = await response.json();

      yield data;
    }
  }

  return generator();
}

const iterator = loadData([1, 2, 3, 4, 5]);

for await (const item of iterator) {
  console.error('item', item);
}
```
