### Template Method <!-- element style="display:none" -->

<split left="1" right="1">

![[template-method.png | 500]](./imgs/template-method.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
- Complexity: ⭐⭐⭐
::: 

</split>

Определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги 
на подклаcсы или методы

::: block <!-- element style="display: none;" -->

```mermaid
flowchart
  subgraph A [Template method]
    
    direction RL
    
    subgraph A1[BaseClass]
      direction TB
      A11[[Step 1]]
      A12[Hook 1]
      A13[[Step 2]]
      A14[Hook 2]
      A15[[Step 3]]
      
      A11 --> A12 
      A12 --> A13 
      A13 --> A14 
      A14 --> A15 
    end
    
    subgraph A2[ConcreteClass]
      direction TB
        A21[[Step 1]]
        A22[Hook 1]
        A23[[Step 2]]
        A24[Hook 2] 
        A25[[Step 3]]
        
        A21 --> A22 
        A22 --> A23 
        A23 --> A24 
        A24 --> A25 
    end
    
    A2 --> A1
  end
```

:::
 
--

#### Template Method: example #1

```js
class BaseComponent {
  constructor() {
    this.templateMethod();
  }

  templateMethod () {
    this.beforeRenderHook();
    this.render();
    this.afterRenderHook();
    this.initEventListeners();
    this.afterInitializationHook();
  }

  beforeRenderHook () {
    // This is hook method
  }

  render () {
    // Some basic implementation
  }

  afterRenderHook () {
    // This is hook method
  }

  initEventListeners () {
    // Some basic implementation
  }

  afterInitializationHook () {
    // This is hook method
  }
}
```

--

#### Template Method: example #1

```js
class Component extends BaseComponent {
  beforeRenderHook () {
    console.log(`This hook will be run before render method`);
  }

  afterRenderHook () {
    console.log(`This hook will be run after render method`);
  }

  initEventListeners () {
    super.initEventListeners();
    // Here we can add extra listeners
  }
}
```
