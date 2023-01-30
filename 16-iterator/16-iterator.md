### Iterator <!-- element style="display:none" -->

<split left="1" right="1">

![[iterator.png | 500]](./imgs/iterator.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
- Complexity: ⭐⭐⭐
::: 

</split>

Позволяет итерировать некоторую сущность не раскрывая ее внутреннего устройства.

--

#### Iterator: code example #1

```js [|]
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

--

#### Iterator: code example #2

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

--

#### Iterator: code example #3

```js
class List {
  children = [];

  constructor(content = '', children = []) {  
    this.content = content;
    this.children.push(...children);
  }
  
  forEach (callback, index = 0) {  
    callback(this, index);  
  
    for (const child of this.children) {  
      child.forEach(callback, index + 1);  
  }  
}

  print () {
    this.forEach((item, index) => {  
      console.log(`${'*'.repeat(index)} ${item.content}`);
    });
  }
}

class Item {
  constructor(content = '') {
    this.content = content;
  }
  
  forEach (callback, index) {
    callback(this, index);
  }
}
```

back: [[📖 presentation#Iterator]] <!-- element style="display:none" -->
