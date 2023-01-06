# Adapter

```mermaid
flowchart LR
  A[Client] -- "get(a)" --> B[Adapter]
  B -- "getLibMethod(a)" --> C[Library]
```

```js
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
