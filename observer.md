# Observer

```mermaid
flowchart BT
  A[Observer] -- "notify" --> B
  
  B -- "subscribe/unsubscribe" --> A
  
  subgraph B [Subscribes]
    C[Component 1]
    D[Component 2]
    E[Component 3]
  end
```

Example:

```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter(observer => observer !== callback);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```
