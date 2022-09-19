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
