### Adapter <!-- element style="display:none" -->

<split left="1" right="1">

![[adapter.png | 500]](./imgs/adapter.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Structural
- Complexity: ⭐⭐⭐
::: 

</split>

Позволяет объектам с несовместимыми интерфейсами работать вместе

::: block <!-- element style="display: none;" -->
```mermaid
flowchart LR
  A[Client] -- "get(a)" --> B[Adapter]
  B -- "getLibMethod(a)" --> C[Library]
```
:::

--

#### Adapter: example #1

```js [|5,8,17,20, 26-35]
// adapterA.js
import libA from './libA.js';

export const adapterA = {
  read () {
    return libA.readData();
  },
  write () {
    return libA.writeData();
  }
}

// adapterB.js
import libB from './libB.js';

export const adapterB = {
  read () {
    return libB.getData();
  },
  write () {
    return libB.sendData();
  }
}

// component.js
import adapterA from './adapterA.js';

class Component {
  constructor(props) {
    this.data = adapterA.read();
  }
  send () {
    adapterA.write();
  }
}
```

back: [[📖 presentation#Adapter]] <!-- element style="display:none" -->
