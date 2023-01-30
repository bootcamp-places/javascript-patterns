### Singleton <!-- element style="display:none" -->

<split left="1" right="1">

![[singleton.png | 500]](./imgs/singleton.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Creational
- Complexity: ⭐⭐⭐
::: 

</split>

Гарантирует, что у класса есть только один экземпляр

--

#### Singleton: example #1

```js [|4-9|13]
class Singleton {
  static #instance;

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    Singleton.#instance = this;
  }
}

new Singleton() === new Singleton(); // true
```

--

#### Singleton: example #2

```js [|9-17|22]
function createDbConnection () {  
  let connection;  
  
  function connectToSomeDb () {  
    // some logic here...  
    return {};  
  }  
  
  return {  
    connect () {  
      if (!connection) {  
        connection = connectToSomeDb();  
      }  
  
      return connection;  
    }  
  };  
}  
  
const db = createDbConnection();  
  
console.log(db.connect() === db.connect()); // true
```

back: [[📖 presentation#Singleton]] <!-- element style="display:none" -->
