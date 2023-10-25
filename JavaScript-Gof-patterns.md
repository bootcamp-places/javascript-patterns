---
theme: serif
highlightTheme: monokai
published: true
margin: 0
tags: ["Gof", "patterns"]
width: 1440
height: 900
---

<style>

.reveal pre code {
  max-height: 80vh;
}

.app-resources-block {
  font-size: 1.5rem;
}

</style>

## GoF Patterns

![[gof-patterns.png | 800]]

note:

- Design patterns are common architectural approaches.
- Popularized by the Gang of Four book 1994 (Smalltalk and C++)
- Universally relevant

---

## Singleton

![[05-singleton]]

--

### Singleton: resources:

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/index.js#L9
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification-manager/index.js#L8
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/router/index.js#L16
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/index.js#L7
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/sync-storage.js#L8
  :::

--

### Singleton: time to practice

~3 min
https://qa-online-editor.bootcamp.place/js-track/patterns/singleton

---

## Adapter

![[06-adapter]]

--

### Adapter: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/local-storages.service.js#L1
  :::

--

### Adapter: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/adapter

---

## Decorator

![[09-decorator]]

--

### Decorator: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/cart/index.js#L87
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/search/debounce.js#L1
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/connect.js#L1
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/connect.js#L3
  :::

--

### Decorator: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/decorator

---

## Facade

![[10-facade]]

--

### Facade: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/infinity-list/index.js#L43
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/main/index.js#L138
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/cart/index.js#L19
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/wishlist/index.js#L33
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/pages/wishlist/index.js#L101
  :::

--

### Facade: time to practice

~2min
https://qa-online-editor.bootcamp.place/js-track/patterns/facade

---

## Template Method

![[22-template-method]]

--

### Template Method: time to practice

~6min
https://qa-online-editor.bootcamp.place/js-track/patterns/templateMethod

---

## Flyweight

![[11-flyweight]]

--

### Flyweight: time to practice

~6min
https://qa-online-editor.bootcamp.place/js-track/patterns/flyweight

---

## Factory Method

![[03-factory-method]]

--

### Factory Method: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification-manager/index.js#L30
- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/storage/sync-storage.js#L17
  :::

--

### Factory Method: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/factoryMethod

---

## Strategy

![[21-strategy]]

--

### Strategy: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/strategy

---

## Observer

![[19-observer]]

--

### Observer: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/observer/index.js#L1
  :::

--

### Observer: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/observer

---

## Prototype

![[04-prototype]]

--

### Prototype: time to practice

~6min
https://qa-online-editor.bootcamp.place/js-track/patterns/prototype

---

## Builder

![[02-builder]]

--

### Builder: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/api/index.js#L3
  :::

--

### Builder: time to practice

~5min
https://qa-online-editor.bootcamp.place/js-track/patterns/builder

---

## Iterator

![[16-iterator]]

--

### Iterator: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/iterator

---

## Proxy

![[12-proxy]]

--

### Proxy: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/request/proxy.js#L1
  :::

--

### Proxy: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/proxy1

---

## Mediator

![[17-mediator]]

--

### Mediator: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/core/store/index.js#L1
  :::

--

### Mediator: time to practice

~10min
https://qa-online-editor.bootcamp.place/js-track/patterns/mediator

---

## Abstract Factory

![[01-abstract-factory]]

--

### Abstract Factory: resources

::: block <!-- element class="app-resources-block" -->

- https://vscode.dev/github/dosandk/vanila-js-online-store/blob/083d499c1ff85fc9143f0f30d65c4e5a46386b45/src/components/notification/notification/index.js#L3
  :::

--

### Abstract Factory: time to practice

~5min
https://qa-online-editor.bootcamp.place/js-track/patterns/abstractFactory

---

## State

![[20-state]]

--

### State: time to practice

~6min
https://qa-online-editor.bootcamp.place/js-track/patterns/state

---

## Chain of Responsibility

![[13-chain-of-responsibility]]

--

### Chain of Responsibility: time to practice

https://qa-online-editor.bootcamp.place/js-track/patterns/chainOfResponsibility

---

## Composite

![[08-composite]]

--

### Composite: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/composite

---

## Visitor

![[23-visitor]]

--

### Visitor: time to practice

~6min
https://qa-online-editor.bootcamp.place/js-track/patterns/visitor

---

## Bridge

![[07-bridge]]

--

### Bridge: time to practice

~1min
https://qa-online-editor.bootcamp.place/js-track/patterns/bridge

---

## Memento

![[18-memento]]

--

### Memento: time to practice

https://qa-online-editor.bootcamp.place/js-track/patterns/memento

---

## Command

![[14-command]]

--

### Command: time to practice

~3min
https://qa-online-editor.bootcamp.place/js-track/patterns/command

---

## Q&A

- Observer vs Mediator?
- Factory method vs Abstract factory?
- Strategy vs Bridge?
- Composite vs Iterator?
