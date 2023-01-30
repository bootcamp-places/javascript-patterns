### Chain Of Responsibility <!-- element style="display:none" -->

<split left="1" right="1">

![[chain-of-responsibility.png | 500]](./imgs/chain-of-responsibility.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
- Complexity: ⭐⭐⭐
::: 

</split>

Позволяет передавать запросы последовательно по цепочке обработчиков. 
Каждый последующий обработчик решает, может ли он обработать запрос сам и 
стоит ли передавать запрос дальше по цепи.

::: block <!-- element style="display: none;" -->

```mermaid
flowchart LR
    A[Request] -- "<span style='background: #36D399'>baz" --> B    
    D -- "<span style='background: #36D399'>result" --> E(Response)
    
    subgraph Chain of Responsibility 
        direction LR
        B(handleFoo) --> C
        C(handleBar) --> D(handleBaz)
    end

    style B fill:#F87272
    style C fill:#F87272
    style D fill:#F87272
```

:::

--

#### Chain of Responsibility: example #1

```js [|2,10]
class Handler {
  handle(state, action) {
    if (this.nextHandler) {
      return this.nextHandler.handle(state, action);
    }

    return state;
  }

  setNext(handler) {
    this.nextHandler = handler;
  }
}
```

--

#### Chain of Responsibility: example #1

```js
class ProfileHandler extends Handler {
  handle(state, action) {
    if (action.type === "PERSON/UPDATE") {
      return {
        ...state
        // ... add person data
      };
    }

    return super.handle(state, action);
  }
}

class PostsHandler extends Handler {
  handle(state, action) {
    if (action.type === "POSTS/GET") {
      return {
        ...state
        // ... add posts data
      };
    }

    return super.handle(state, action);
  }
}
```

--

#### Chain of Responsibility: example #1

```js [|1-9|11-14|16-18]
const createRootReducer = (handlers = []) => {
  for (const [index, handler] of handlers.entries()) {
    handler.setNext(handlers[index + 1]);
  }

  const [firstHandler] = handlers;

  return firstHandler;
};

const rootReducer = createRootReducer([
  new ProfileHandler(),
  new PostsHandler()
]);

console.log(rootReducer.handle({}, { type: "UNHANDLED" }));
console.log(rootReducer.handle({}, { type: "PERSON/UPDATE" }));
console.log(rootReducer.handle({}, { type: "POSTS/GET" }));
```

back: [[📖 presentation#Chain of Responsibility]] <!-- element style="display:none" -->
