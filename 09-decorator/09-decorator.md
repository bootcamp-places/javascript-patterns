### Decorator <!-- element style="display:none" -->

<split left="1" right="1">

![[decorator.png | 500]](./imgs/decorator.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Structural
- Complexity: ⭐⭐⭐
::: 

</split>

С помощью "оберток" реализует динамическое расширение функционала используя механизм агрегации или композиции.

::: block <!-- element style="display: none;" -->

```mermaid
flowchart LR
  A[Client] --> D

  subgraph D[Decorator]
    Component
  end
```

:::

--

#### Decorator: example #1
```js [|4, 19]
// connect-to-store.js
const globalStore = {};

const connectToStore = Component => class extends Component {
  constructor(...props) {
    props.push(globalStore);

    super(...props);
  }
}

// component.js
class Component {
  constructor(store) {
    this.store = store;
  }
}

export default connectToStore(Component);
```


back: [[📖 presentation#Decorator]] <!-- element style="display:none" -->
