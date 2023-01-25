### Observer <!-- element style="display:none" -->

![[observer.png | 400]](./imgs/observer.png)

Позволяет создать механизм подписки, который позволит некоторым сущностям следить и реагировать на события, происходящие в других сущностях, как следствие обеспечивая слабую связанность.

::: block <!-- element style="display: none;" -->

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

:::

--

#### Observer: code example #1

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
