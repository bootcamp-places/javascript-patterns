### Memento <!-- element style="display:none" -->

<split left="1" right="1">

![[memento.png | 500]](./imgs/memento.png)

::: block <!-- element style="display: flex; font-size: 2rem" align="center"  -->
- Type: Behavioral
::: 

</split>

Allows you to save and restore past states of objects without revealing the details of their implementation

note:

Дозволяє зберігати та відновлювати минулі стани об'єктів, не розкриваючи подробиць їх реалізації

--

#### Memento: example #1

```js [|2, 4-6]
class Editor {
  #state = {};

  addText(text = "") {
    this.#state.text = text;
  }

  getState() {
    return this.#state;
  }
}
```

--

#### Memento: example #1

```js [|2,6| 18-28 ]
class Editor {
  #history = {};
  #state = {};

  constructor(history = {}) {
    this.#history = history;
  }

  addText(text = "") {
    this.makeSnapshot();
    this.#state.text = text;
  }

  getState() {
    return this.#state;
  }

  makeSnapshot() {
    return this.#history.add(new Memento(this.#state));
  }

  undo() {
    const snapshot = this.#history.get();

    if (snapshot) {
      this.#state = snapshot.getState();
    }
  }
}
```

--

#### Memento: example #1

```js [|1-11|13-24]
class Memento {
  #state = {};

  constructor(state = {}) {
    this.#state = { ...state };
  }

  getState() {
    return this.#state;
  }
}

class History {
  #snapshots = [];

  add(snapshot) {
    this.#snapshots.unshift(snapshot);
    return this.#snapshots.at(0);
  }

  get() {
    return this.#snapshots.shift();
  }
}
```

--

#### Memento: example #1

```js
const history = new History();
const editor = new Editor(history);

editor.addText("hello");
editor.addText("world");
editor.addText("!");

editor.undo();
console.log(editor.getState()); // {text: 'world'}

editor.undo();
console.log(editor.getState()); // {text: 'hello'}

editor.undo();
console.log(editor.getState()); // {}
```

back: [[master-class/javascript-patterns/JavaScript-Gof-patterns#Memento]] <!-- element style="display:none" -->
